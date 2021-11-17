const Qualification = require("../models/Qualification");
const Teacher = require("../models/Teacher");

module.exports = {
  async store(req, res) {
    try {
      const { teacher_id, degree, course, institution, yearFormation } =
        req.body;

      const verifyIfExistsTeacher = await Teacher.findByPk(teacher_id);

      if (!verifyIfExistsTeacher) {
        return res.status(400).json({ error: "Teacher not found" });
      }

      const qualification = await Qualification.create({
        teacher_id,
        degree,
        course,
        institution,
        yearFormation,
      });

      return res.status(201).json(qualification);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexOne(req, res) {
    try {
      const { id } = req.params;

      const verifyIfExistsQualifications = await Qualification.findByPk(id);

      if (!verifyIfExistsQualifications) {
        return res.status(400).json({ error: "Qualification not found" });
      }

      const qualifications = await Qualification.findByPk(id);

      return res.json(qualifications);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexAll(req, res) {
    try {
      const qualifications = await Qualification.findAll();

      return res.status(200).json(qualifications);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { teacher_id, degree, course, institution, yearFormation } =
        req.body;

      const verifyIfExistsQualifications = await Qualification.findByPk(id);

      if (!verifyIfExistsQualifications) {
        return res.status(400).json({ error: "Qualification not found" });
      }

      await Qualification.update(
        {
          teacher_id,
          degree,
          course,
          institution,
          yearFormation,
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

      const verifyIfExistsQualifications = await Qualification.findByPk(id);

      if (!verifyIfExistsQualifications) {
        return res.status(400).json({ error: "Qualification not found" });
      }

      await Qualification.destroy({
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
