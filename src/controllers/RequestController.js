const Request = require("../models/Request");
const Student = require("../models/Student");
const Card = require("../models/Card");

module.exports = {
  async store(req, res) {
    try {
      const {
        student_id,
        card_id,
        startDateTime,
        endDateTime,
        message,
        reply,
        status,
      } = req.body;

      const verifyIfExistsCard = await Card.findByPk(card_id);

      if (!verifyIfExistsCard) {
        return res.status(400).json({ error: "Card not found" });
      }

      const verifyIfExistsStudent = await Student.findByPk(student_id);

      if (!verifyIfExistsStudent) {
        return res.status(400).json({ error: "Student not found" });
      }

      const request = await Request.create({
        student_id,
        card_id,
        startDateTime,
        endDateTime,
        message,
        reply,
        status,
      });

      return res.status(201).json(request);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexOne(req, res) {
    try {
      const { id } = req.params;

      const verifyIfExistsRequest = await Request.findByPk(id);

      if (!verifyIfExistsRequest) {
        return res.status(400).json({ error: "Request not found" });
      }

      const requests = await Request.findByPk(id);

      return res.json(requests);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexAllStudent(req, res) {
    const { id } = req.params;
    const { status } = req.query;
    var whereStatement = {
      student_id: id
    };
    if (status){
      whereStatement = {
        student_id: id,
        status: status
      };
    }
    try {
      const requests = await Request.findAll({
        where: whereStatement,        
        include: {
          association: "card",
          attributes: ["id"],
          include: [{
            association: "teacher",
            atrtributes: ["id", "user_id"],
            include: {
              association: "user",
              attributes: ["name", "avatar"]
            }
          },{
            association: "subject",
            attributes: ["name"]
          }]
        }
      });
      return res.status(200).json(requests);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async indexAllTeacher(req, res) {
    const { id } = req.params;
    const { status } = req.query;
    var whereStatement = {
      '$card.teacher_id$': id
    };
    if (status){
      whereStatement = {
        '$card.teacher_id$': id,
        status: status
      };
    }
      try {
        const requests = await Request.findAll({
          where: whereStatement,
          include: [{
            association: "card",
            include: [{
              association: "teacher",
              attributes: ["id", "user_id"],
              include: {
                association: "user",
                attributes: ["name", "avatar"]
              }
            },{
              association: "subject",
              attributes: ["name"]
            }
          ]},{
            association: 'student',
            attributes: ["id", "user_id"],
            include: {
              association: 'user',
              attributes: ["name", "avatar"]
            }
          }
        ],
        order: [[
          "status", 'ASC']]
      });
      return res.status(200).json(requests);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;

      const { startDateTime, endDateTime, message, reply, status } = req.body;

      const verifyIfExistsRequest = await Request.findByPk(id);

      if (!verifyIfExistsRequest) {
        return res.status(400).json({ error: "Request not found" });
      }

      await Request.update(
        {
          startDateTime,
          endDateTime,
          message,
          reply,
          status,
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

      const verifyIfExistsRequest = await Request.findByPk(id);

      if (!verifyIfExistsRequest) {
        return res.status(400).json({ error: "Request not found" });
      }

      await Request.destroy({
        where: {
          id,
        },
      });

      res.sendStatus(200);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
