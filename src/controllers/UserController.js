const User = require("../models/User");
const Teacher = require("../models/Teacher");
const bcrypt = require("bcrypt");

const generateHashedPassword = require("../utils/generateHashedPassword");
const generateToken = require("../utils/generateToken");

module.exports = {
  async store(req, res) {
    try {

      const { email } = req.body;

      const verifyAlreadyEmail = await User.findOne({
        where: {
          email: email,
        },
      })

      if(verifyAlreadyEmail) {
        return res.status(401).json({ message: "Email already used"});
      }

      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: generateHashedPassword(req.body.password),
        dateBirth: req.body.dateBirth,
        zipCode: req.body.zipCode,
        state: req.body.state,
        city: req.body.city,
        district: req.body.district,
        address: req.body.address,
        avatar: req.body.avatar
      });

      return res.status(201).send({
        token: generateToken(user.id),
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexOne(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      user.password = undefined;
      return res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async userProfile(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id, {
        include: [
          {association: "teacher"},
          {association: "student"}
        ],
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      user.password = undefined;
      return res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexAll(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;

      const userBeforeModification = await User.findByPk(id);

      await User.update(
        {
          name: req.body.name,
          email: userBeforeModification.email,
          password: userBeforeModification.password,
          dateBirth: req.body.dateBirth,
          zipCode: req.body.zipCode,
          state: req.body.state,
          city: req.body.city,
          district: req.body.district,
          address: req.body.address,
          avatar: req.body.avatar,
          updatedAt: new Date(),
        },
        {
          where: {
            id: id,
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

      const verifyIfExistsUser = await User.findByPk(id);

      if (!verifyIfExistsUser) {
        return res.status(400).json({ error: "User not found" });
      }

      await User.destroy({
        where: {
          id: id,
        },
      });

      res.send(200);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async auth(req, res) {
    const { email, password } = req.body;

    const { user } = req; // recebe o usuário do middleware verifyExistsMail

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        res.status(400).json({
          error: err,
        });
      } else {
        if (result) {
          user.password = undefined; //o nick que programou essa linha
          res.status(200).send({
            isCorrect: result,
            token: generateToken(user.id),
          });
        } else {
          res.status(401).json({
            isCorrect: result,
            message: "Invalid Password",
          });
        }
      }
    });
  },
};
