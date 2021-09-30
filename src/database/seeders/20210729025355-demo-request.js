const data = [
  {
    student_id: 1,
    card_id: 1,
    startDateTime: "2021-08-30 22:38:54",
    endDateTime: "2021-08-30 22:38:54",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra commodo metus eu tincidunt. Maecenas",
    reply: "",
    status: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    student_id: 2,
    card_id: 2,
    startDateTime: "2021-08-30 22:38:54",
    endDateTime: "2021-08-30 22:38:54",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra commodo metus eu tincidunt. Maecenas",
    reply: "",
    status: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    student_id: 3,
    card_id: 3,
    startDateTime: "2021-08-30 22:38:54",
    endDateTime: "2021-08-30 22:38:54",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra commodo metus eu tincidunt. Maecenas",
    reply: "",
    status: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    student_id: 4,
    card_id: 4,
    startDateTime: "2021-08-30 22:38:54",
    endDateTime: "2021-08-30 22:38:54",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra commodo metus eu tincidunt. Maecenas",
    reply: "",
    status: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    student_id: 5,
    card_id: 1,
    startDateTime: "2021-08-30 22:38:54",
    endDateTime: "2021-08-30 22:38:54",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra commodo metus eu tincidunt. Maecenas",
    reply: "",
    status: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    student_id: 5,
    card_id: 1,
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
