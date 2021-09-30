const data = [
  {
    description: "Programação",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    description: "Front-End",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    description: "UX & Design",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    description: "Mobile",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    description: "Devops",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", data, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
