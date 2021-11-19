const { Op } = require('sequelize');
const {Sequelize} = require('sequelize');
const Category = require("../models/Category");
const Subject = require("../models/Subject");

module.exports = {
  async store(req, res) {
    try {
      const { name, description, category_id } = req.body;

      const verifyIfExistsCategory = await Category.findByPk(category_id);

      if (!verifyIfExistsCategory) {
        return res.status(400).json({ error: "Category not found" });
      }

      const subject = await Subject.create({
        name,
        description,
        category_id,
        image
      });

      return res.status(201).json(subject);
      
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  async indexOne(req, res) {
    try {
      const { id } = req.params;

      const subject = await Subject.findByPk(id);

      if (!subject) {
        return res.status(400).json({ error: "Subject not found" });
      }

      return res.json(subject);

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexByName(req, res) {
    try {
      const { name } = req.params;

      const subject = await Subject.findOne({
        where: {
          name: {
            [Op.like]: `%${name}%`}
        },
        attributes: ["id"]
      });

      if (!subject) {
        return res.status(400).json({ error: "Subject not found" });
      }

      return res.json(subject);

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexByCategory(req, res) {
    try {
      const { category_id } = req.params;

      const subject = await Subject.findAll({
        where: {
          category_id: category_id
        }
      });

      if (!subject) {
        return res.status(400).json({ error: "Subject not found" });
      }

      return res.json(subject);

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexAll(req, res) {
    try {
      const subjects = await Subject.findAll({
        include: [{ 
          association: 'category',
          attributes: ['description']
        },{
          association: 'cards',
          attributes: [
            [Sequelize.fn('AVG', Sequelize.col(`price`)), "avg_price"]
          ]
        }],
        group: "id"
      });
      return res.json(subjects);

    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const { image } = req.body;
      
      const verifyIfExistsSubject = await Subject.findByPk(id);

      if (!verifyIfExistsSubject) {
        return res.status(400).json({ error: "Subject not found" });
      }

      await Subject.update(
        {
          name,
          description,
          image,
          updatedAt: new Date(),
        },
        {
          where: {
            id,
          },
        }
      );

      return res.sendStatus(200);

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      const verifyIfExistsSubject = await Subject.findByPk(id);

      if (!verifyIfExistsSubject) {
        return res.status(400).json({ error: "Subject not found" });
      }

      await Subject.destroy({
        where: {
          id
        },
      });

      res.sendStatus(200);

    } catch (err) {
      res.status(500).json(err);
    }
  },
};
