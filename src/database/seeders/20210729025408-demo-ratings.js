const data = [
  {
    request_id: 1,
    card_id: 3,
    stars: 3,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    request_id: 2,
    card_id: 2,
    stars: 4,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    request_id: 3,
    card_id: 3,
    stars: 2,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    request_id: 4,
    card_id: 4,
    stars: 1,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    request_id: 6,
    card_id: 1,
    stars: 5,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ratings", data, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ratings", null, {});
  },
};
