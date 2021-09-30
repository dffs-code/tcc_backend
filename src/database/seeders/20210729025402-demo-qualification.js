const data = [
  {
    teacher_id: 5,
    degree: "Bacharel ",
    course: "Ciencia da computação",
    institution: "IFSP",
    yearFormation: "2021-05-20",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    teacher_id: 15,
    degree: "Tecnologo ",
    course: "Análise e desenvolvimento de sistemas",
    institution: "IFSP",
    yearFormation: "2021-05-20",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    teacher_id: 25,
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
