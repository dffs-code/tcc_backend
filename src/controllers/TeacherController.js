const User = require("../models/User");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");

module.exports = {
  async store(req, res) {
    try {
      const { user_id, about } = req.body;

      const verifyIfExistsTeacher = await User.findByPk(user_id);

      if (!verifyIfExistsTeacher) {
        return res.status(400).json({ error: "User not found" });
      }

      const verifyIdAlreadyUsedInStudent = await Student.findOne({
        where: {
          user_id,
        },
      })

      if (verifyIdAlreadyUsedInStudent) {
        return res.status(400).json({ error: "ID is already a student" });
      }

      const teacher = await Teacher.create({
        user_id,
        about
      });

      return res.status(201).json(teacher);
      
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  async indexOne(req, res) {
    try {
      const { id } = req.params;
      
      const verifyIfExistsTeacher = await User.findByPk(id);

      if (!verifyIfExistsTeacher) {
        return res.status(400).json({ error: "User not found" });
      }

      const users = await Teacher.findByPk(id, {
        // include: { association: "user" },
        // include: { association: "qualification" },
      });

      return res.json(users);

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexAll(req, res) {
    try {
      const teachers = await Teacher.findAll();

      return res.json(teachers);

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { about } = req.body;

      const verifyIfExistsTeacher = await Teacher.findByPk(id);

      if (!verifyIfExistsTeacher) {
        return res.status(400).json({ error: "User not found" });
      }

      await Teacher.update(
        {
          about,
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

      const verifyIfExistsTeacher = await Teacher.findByPk(id);

      if (!verifyIfExistsTeacher) {
        return res.status(400).json({ error: "User not found" });
      }

      await Teacher.destroy({
        where: {
          id
        },
      });

      res.send(200);

    } catch (err) {
      res.status(500).json(err);
    }
  },
};
