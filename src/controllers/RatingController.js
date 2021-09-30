const Rating = require("../models/Rating");
const Request = require("../models/Request");

module.exports = {
  async store(req, res) {
    try {
      const { request_id, stars, message } = req.body;

      const verifyIfExistsRequest = await Request.findByPk(request_id);

      if (!verifyIfExistsRequest) {
        return res.status(400).json({ error: "Request not found" });
      }

      const rating = await Rating.create({
        request_id,
        stars,
        message,
      });

      return res.status(201).json(rating);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async indexOne(req, res) {
    try {
      const { id } = req.params;

      const rating = await Rating.findByPk(id);

      if (!rating) {
        return res.status(400).json({ error: "Rating not found" });
      }

      return res.json(rating);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async indexAll(req, res) {
    try {
      const rating = await Rating.findAll();

      return res.json(rating);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { stars, message } = req.body;

      const verifyIfExistsRating = await Rating.findByPk(id);

      if (!verifyIfExistsRating) {
        return res.status(400).json({ error: "Rating not found" });
      }

      await Rating.update(
        {
          stars,
          message,
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

      const verifyIfExistsRating = await Rating.findByPk(id);

      if (!verifyIfExistsRating) {
        return res.status(400).json({ error: "Rating not found" });
      }

      await Rating.destroy({
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
