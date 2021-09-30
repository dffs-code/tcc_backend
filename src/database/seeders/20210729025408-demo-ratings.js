const data = [
  {
    request_id: 5,
    card_id: 25,
    stars: 3,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    request_id: 15,
    card_id: 15,
    stars: 4,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    request_id: 25,
    card_id: 25,
    stars: 2,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    request_id: 35,
    card_id: 35,
    stars: 1,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    request_id: 55,
    card_id: 5,
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
