const data = [
  {
    user_id: 16,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 17,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 18,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 19,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 20,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 21,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 22,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 23,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 24,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 25,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 26,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 27,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 28,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 29,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 30,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("teachers", data, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("teachers", null, {});
  },
};
