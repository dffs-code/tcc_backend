const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Subject = require('../models/Subject');
const Request = require('../models/Request');
const Qualification = require('../models/Qualification');
const Categories = require('../models/Category');
const Ratings = require('../models/Rating');
const Card = require('../models/Card');

const connection = new Sequelize(dbConfig);

User.init(connection);
Student.init(connection);
Teacher.init(connection);
Subject.init(connection);
Request.init(connection);
Qualification.init(connection);
Categories.init(connection);
Ratings.init(connection);
Card.init(connection);

User.associate(connection.models);
Student.associate(connection.models);
Teacher.associate(connection.models);
Request.associate(connection.models);
Qualification.associate(connection.models);
Categories.associate(connection.models);
Subject.associate(connection.models);
Ratings.associate(connection.models);
Card.associate(connection.models);

module.exports = connection;