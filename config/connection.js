// import the sequelize constructor from the library
const Sequelize =require('sequelize');

require('dotenv').config() // sets environment variables

// All we're doing here is importing the base sequelize class and using it to create a new connection to the db

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  // config settings
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});
// export connection
module.exports = sequelize;