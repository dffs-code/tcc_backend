const data = [
  {
    student_id: 5,
    card_id: 5,
    startDateTime: "2021-08-30 22:38:54",
    endDateTime: "2021-08-30 22:38:54",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra commodo metus eu tincidunt. Maecenas",
    reply: "",
    status: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    student_id: 15,
    card_id: 15,
    startDateTime: "2021-08-30 22:38:54",
    endDateTime: "2021-08-30 22:38:54",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra commodo metus eu tincidunt. Maecenas",
    reply: "",
    status: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    student_id: 25,
    card_id: 25,
    startDateTime: "2021-08-30 22:38:54",
    endDateTime: "2021-08-30 22:38:54",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra commodo metus eu tincidunt. Maecenas",
    reply: "",
    status: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    student_id: 35,
    card_id: 35,
    startDateTime: "2021-08-30 22:38:54",
    endDateTime: "2021-08-30 22:38:54",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra commodo metus eu tincidunt. Maecenas",
    reply: "",
    status: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    student_id: 45,
    card_id: 5,
    startDateTime: "2021-08-30 22:38:54",
    endDateTime: "2021-08-30 22:38:54",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra commodo metus eu tincidunt. Maecenas",
    reply: "",
    status: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    student_id: 55,
    card_id: 5,
    startDateTime: "2021-09-27 22:38:54",
    endDateTime: "2021-09-27 23:38:54",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra commodo metus eu tincidunt. Maecenas",
    reply: "",
    status: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("requests", data, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("requests", null, {});
  },
};
