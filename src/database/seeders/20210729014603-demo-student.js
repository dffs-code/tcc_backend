const data = [
  {
    user_id: 1,
    interest: "Java Script;Python",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 2,
    interest: "Cobol;Java",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 3,
    interest: "Matemática",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 4,
    interest: "HTML;CSS",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 5,
    interest: "NodeJS",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 6,
    interest: "CSS",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 7,
    interest: "SQL;MySQL",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 8,
    interest: "Ruby",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 9,
    interest: "Linguagem C",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 10,
    interest: "Fullstack",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 11,
    interest: "Java Script;Python",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 12,
    interest: ".NET",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 13,
    interest: "Java",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 14,
    interest: "React",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 15,
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
