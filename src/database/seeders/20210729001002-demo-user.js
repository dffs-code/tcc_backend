const faker = require("faker-br");

const data = [...Array(30)].map((data) => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(8),
  dateBirth: new Date(),
  zipcode: faker.address.zipCode(),
  state: faker.address.state(),
  city: faker.address.city(),
  district: faker.address.country(),
  address: faker.address.streetAddress(),
  isActive: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  avatar: "https://i.pravatar.cc/300",
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", data, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
