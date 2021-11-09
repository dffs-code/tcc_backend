const {Sequelize} = require('sequelize');
const Card = require("../models/Card");
const Subject = require("../models/Subject");
const Teacher = require("../models/Teacher");
const Rating = require("../models/Rating");
module.exports = {
  async store(req, res) {
    try {
      const { teacher_id, subject_id, about, price, modality, status } =
        req.body;

      const verifyIfExistsTeacher = await Teacher.findByPk(teacher_id);

      if (!verifyIfExistsTeacher) {
        return res.status(400).json({ error: "Teacher not found" });
      }

      const verifyIfExistsSubject = await Subject.findByPk(subject_id);

      if (!verifyIfExistsSubject) {
        return res.status(400).json({ error: "Subject not found" });
      }

      const card = await Card.create({
        teacher_id,
        subject_id,
        about,
        price,
        modality,
        status,
      });

      return res.status(201).json(card);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async indexOne(req, res) {
    try {
      const { id } = req.params;

      const verifyIfExistsCard = await Card.findByPk(id);

      if (!verifyIfExistsCard) {
        return res.status(400).json({ error: "Card not found" });
      }
      return res.json(verifyIfExistsCard);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexAll(req, res) {
    try {
      const card = await Card.findAll();

      return res.json(card);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexAllFullCards(req, res) {
    try {
       
      // const cards = await Card.findAll(

      //   {
      //     attributes: ['id', 'about', 'price'], 
      //     include: [{
      //         association: "teacher",
      //         attributes: ['about'],
      //         include: {
      //           association: "user",
      //           attributes: ['avatar', 'name', 'city']
      //         }
      //       },{
      //         association: "ratings",
      //         attributes: [[Sequelize.fn('AVG', Sequelize.col(`stars`)), "avg_stars"]]
      //       },{
      //         association: "subject",
      //         attributes: ['name'],
      //         include: {
      //           association: "category",
      //           attributes: ['id']
      //         }
      //       },
      //     ],
      //       group: 'Card.id'
      //     }
      // )
        const cards = await Card.sequelize.query("SELECT `Card`.`id`, `Card`.`about`, `Card`.`price`, `teacher`.`id` AS `teacher.id`, `teacher`.`about` AS `teacher.about`, `teacher->user`.`avatar` AS `teacher_avatar`, `teacher->user`.`name` AS `teacher_name`, `teacher->user`.`city` AS `teacher_city`, AVG(`stars`) AS `avg_stars`, `subject`.`name` AS `subject_name` FROM `Cards` AS `Card` LEFT OUTER JOIN `Teachers` AS `teacher` ON `Card`.`teacher_id` = `teacher`.`id` LEFT OUTER JOIN `Users` AS `teacher->user` ON `teacher`.`user_id` = `teacher->user`.`id` LEFT OUTER JOIN `Ratings` AS `ratings` ON `Card`.`id` = `ratings`.`card_id` LEFT OUTER JOIN `Subjects` AS `subject` ON `Card`.`subject_id` = `subject`.`id` GROUP BY `Card`.`id`", { type: Sequelize.QueryTypes.SELECT})
        return res.json(cards);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  async indexAllCardsByCategory(req, res) {
    const {categoryId} = req.params;
    try {

        const cards = await Card.sequelize.query("SELECT `Card`.`id`, `Card`.`about`, `Card`.`price`, `teacher`.`id` AS `teacher.id`, `teacher`.`about` AS `teacher.about`, `teacher->user`.`id` AS `teacher.user.id`, `teacher->user`.`avatar` AS `teacher_avatar`, `teacher->user`.`name` AS `teacher_name`, `teacher->user`.`city` AS `teacher_city`, `ratings`.`id` AS `ratings.id`, AVG(`stars`) AS `avg_stars`, `subject`.`id` AS `subject.id`, `subject`.`name` AS `subject_name`, `subject->category`.`id` AS `subject.category.id` FROM `Cards` AS `Card` LEFT OUTER JOIN `Teachers` AS `teacher` ON `Card`.`teacher_id` = `teacher`.`id` LEFT OUTER JOIN `Users` AS `teacher->user` ON `teacher`.`user_id` = `teacher->user`.`id` LEFT OUTER JOIN `Ratings` AS `ratings` ON `Card`.`id` = `ratings`.`card_id` LEFT OUTER JOIN `Subjects` AS `subject` ON `Card`.`subject_id` = `subject`.`id` LEFT OUTER JOIN `Categories` AS `subject->category` ON `subject`.`category_id` = `subject->category`.`id` WHERE `subject`.`category_id` = " + categoryId + " GROUP BY `Card`.`id`;", { type: Sequelize.QueryTypes.SELECT})
        return res.json(cards);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  async indexAllCardsBySubjectName(req, res) {
    const { subjectName } = req.params;
    try {

        const cards = await Card.sequelize.query("SELECT `Card`.`id`, `Card`.`about`, `Card`.`price`, `teacher`.`id` AS `teacher.id`, `teacher`.`about` AS `teacher.about`, `teacher->user`.`id` AS `teacher.user.id`, `teacher->user`.`avatar` AS `teacher_avatar`, `teacher->user`.`name` AS `teacher_name`, `teacher->user`.`city` AS `teacher_city`, `ratings`.`id` AS `ratings.id`, AVG(`stars`) AS `avg_stars`, `subject`.`id` AS `subject.id`, `subject`.`name` AS `subject_name`, `subject->category`.`id` AS `subject.category.id` FROM `Cards` AS `Card` LEFT OUTER JOIN `Teachers` AS `teacher` ON `Card`.`teacher_id` = `teacher`.`id` LEFT OUTER JOIN `Users` AS `teacher->user` ON `teacher`.`user_id` = `teacher->user`.`id` LEFT OUTER JOIN `Ratings` AS `ratings` ON `Card`.`id` = `ratings`.`card_id` LEFT OUTER JOIN `Subjects` AS `subject` ON `Card`.`subject_id` = `subject`.`id` LEFT OUTER JOIN `Categories` AS `subject->category` ON `subject`.`category_id` = `subject->category`.`id` WHERE `subject`.`name` LIKE '%" + subjectName + "%' GROUP BY `Card`.`id`;", { type: Sequelize.QueryTypes.SELECT})
        return res.json(cards);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  async indexCardsByFilter(req, res) {
    let { subject, price, orderBy } = req.query;

    if(orderBy === "avg_stars"){
      orderBy += " DESC"
    }
    if(orderBy === "price"){
      orderBy += " ASC"
    }

    try {

        const cards = await Card.sequelize.query("SELECT `Card`.`id`, `Card`.`about`, `Card`.`price`, `teacher`.`id` AS `teacher.id`, `teacher`.`about` AS `teacher.about`, `teacher->user`.`id` AS `teacher.user.id`, `teacher->user`.`avatar` AS `teacher_avatar`, `teacher->user`.`name` AS `teacher_name`, `teacher->user`.`city` AS `teacher_city`, `ratings`.`id` AS `ratings.id`, AVG(`stars`) AS `avg_stars`, `subject`.`id` AS `subject.id`, `subject`.`name` AS `subject_name`, `subject->category`.`id` AS `subject.category.id` FROM `Cards` AS `Card` LEFT OUTER JOIN `Teachers` AS `teacher` ON `Card`.`teacher_id` = `teacher`.`id` LEFT OUTER JOIN `Users` AS `teacher->user` ON `teacher`.`user_id` = `teacher->user`.`id` LEFT OUTER JOIN `Ratings` AS `ratings` ON `Card`.`id` = `ratings`.`card_id` LEFT OUTER JOIN `Subjects` AS `subject` ON `Card`.`subject_id` = `subject`.`id` LEFT OUTER JOIN `Categories` AS `subject->category` ON `subject`.`category_id` = `subject->category`.`id` WHERE 1=1 " + (subject ? " AND`subject`.`id` = " + subject : "")
         + (price ? " AND `card`.`price` <= " + price : "") + " GROUP BY `Card`.`id` " + (orderBy ? "ORDER BY " + orderBy + ";" : ""),{ type: Sequelize.QueryTypes.SELECT})
        return res.json(cards);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { about, price, modality, status } = req.body;

      const verifyIfExistsCard = await Card.findByPk(id);

      if (!verifyIfExistsCard) {
        return res.status(400).json({ error: "Card not found" });
      }

      await Card.update(
        {
          about,
          price,
          modality,
          status,
          updatedAt: new Date(),
        },
        {
          where: {
            id,
          },
        }
      );

      return res.send(200);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      const verifyIfExistsCard = await Card.findByPk(id);

      if (!verifyIfExistsCard) {
        return res.status(400).json({ error: "Card not found" });
      }

      await Card.destroy({
        where: {
          id,
        },
      });

      res.send(200);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
