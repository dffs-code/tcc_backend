const Category = require("../models/Category");

module.exports = {
  async store(req, res) {
    try {
      const { description } = req.body;

      const category = await Category.create({
        description,
      });

      return res.status(201).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexOne(req, res) {
    try {
      const { id } = req.params;

      const verifyIfExistsCategories = await Category.findByPk(id);

      if (!verifyIfExistsCategories) {
        return res.status(400).json({ error: "Category not found" });
      }

      return res.json(verifyIfExistsCategories);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexAll(req, res) {
    try {
      const categories = await Category.findAll();

      return res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexAllSubjects(req, res) {
    const {limit} = req.query;
    try {
      if(limit){
        const categories = await Category.findAll({
          include: {
            association: "subjects"
          },
          limit: parseInt(req.query.limit) //|| 4
        });
        return res.status(200).json(categories);
      } else {
        const categories = await Category.findAll({
          include: {
            association: "subjects"
          }
        });
        return res.status(200).json(categories);
      }

    } catch (err) {
      res.status(500).json(err);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { description } = req.body;

      const verifyIfExistsCategories = await Category.findByPk(id);

      if (!verifyIfExistsCategories) {
        return res.status(400).json({ error: "Category not found" });
      }

      await Category.update(
        {
          description,
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

      const verifyIfExistsCategories = await Category.findByPk(id);

      if (!verifyIfExistsCategories) {
        return res.status(400).json({ error: "Category not found" });
      }

      await Category.destroy({
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
