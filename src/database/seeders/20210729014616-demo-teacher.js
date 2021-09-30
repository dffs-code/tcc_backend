const data = [
  {
    user_id: 165,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 175,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 185,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 195,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 205,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 215,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 225,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 235,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 245,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 255,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 265,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 275,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 285,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 295,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate eros tellus, et pharetra nulla pharetra ac. In dignissim id eros et volutpat. Morbi in velit quis est sagittis convallis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    user_id: 5,
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
