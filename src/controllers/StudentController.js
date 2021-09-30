const User = require("../models/User");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");

module.exports = {
  async store(req, res) {
    try {
      const { user_id, interest } = req.body;

      const verifyIfExistsStudent = await User.findByPk(user_id);

      if (!verifyIfExistsStudent) {
        return res.status(400).json({ error: "User not found" });
      }

      const verifyIdAlreadyUsedInTeacher = await Teacher.findOne({
        where: {
          user_id,
        },
      });

      if (verifyIdAlreadyUsedInTeacher) {
        return res.status(400).json({ error: "ID is already a teacher" });
      }

      const student = await Student.create({
        user_id,
        interest,
      });

      return res.status(201).json(student);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexOne(req, res) {
    try {
      const { id } = req.params;

      const verifyIfExistsStudent = await User.findByPk(id);

      if (!verifyIfExistsStudent) {
        return res.status(400).json({ error: "User not found" });
      }

      const users = await Student.findByPk(id, {
        // include: { association: "user" },
      });

      return res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexAll(req, res) {
    try {
      const students = await Student.findAll();

      return res.status(200).json(students);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { interest } = req.body;

      const verifyIfExistsStudent = await Student.findByPk(id);

      if (!verifyIfExistsStudent) {
        return res.status(400).json({ error: "User not found" });
      }

      await Student.update(
        {
          interest,
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

      const verifyIfExistsStudent = await Student.findByPk(id);

      if (!verifyIfExistsStudent) {
        return res.status(400).json({ error: "User not found" });
      }

      await Student.destroy({
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
