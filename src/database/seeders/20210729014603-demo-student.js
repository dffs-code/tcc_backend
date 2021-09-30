const data = [
  {
    user_id: 15,
    interest: "Java Script;Python",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 25,
    interest: "Cobol;Java",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 35,
    interest: "Matemática",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 45,
    interest: "HTML;CSS",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 55,
    interest: "NodeJS",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 65,
    interest: "CSS",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 75,
    interest: "SQL;MySQL",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 85,
    interest: "Ruby",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 95,
    interest: "Linguagem C",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 105,
    interest: "Fullstack",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 115,
    interest: "Java Script;Python",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 125,
    interest: ".NET",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 135,
    interest: "Java",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 145,
    interest: "React",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 155,
    interest: "Portugues",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("students", data, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("students", null, {});
  },
};
