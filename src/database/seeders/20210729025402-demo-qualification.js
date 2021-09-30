const data = [
  {
    teacher_id: 1,
    degree: "Bacharel ",
    course: "Ciencia da computação",
    institution: "IFSP",
    yearFormation: "2021-05-20",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    teacher_id: 2,
    degree: "Tecnologo ",
    course: "Análise e desenvolvimento de sistemas",
    institution: "IFSP",
    yearFormation: "2021-05-20",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    teacher_id: 3,
    degree: "Licenciatura ",
    course: "Letras",
    institution: "IFSP",
    yearFormation: "2021-05-20",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("qualifications", data, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("qualifications", null, {});
  },
};
