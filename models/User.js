const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// sequelize model "class " essentially acts as a JAvascript class & will define the columns, data types, and any other rules we need data to adhere to

// create user model 
class User extends Model {}

// define table columns and configuration
User.init(
  {
    // define an id column
    id: {
      // use the special Sequelize DataTYpes object to provide what type of data it is
      type: DataTypes.INTEGER,
      // turn on auto increment
      autoIncrement: true,
      // instruct that this is the primary Key
      primaryKey: true,
      // this is the equivalent of SQL's NOT NULL option
      allowNull: false
    },
    // define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define an email column
    email : {
      type: DataTypes.STRING,
      allowull: false,
      // there cannot be any duplicate email values in this table
      unique: true,
      // if allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isEmail: true
      }
    },
    // define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate :{
        // this means password must be at least four characters long
        len: [4]
      }
    }
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // pass in our imported sequelize connection (the direct connection to our database) 
    sequelize,
    // dont automatically create createdAt, updatedAt timestamp fields
    timestamps: false,
    // dont pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing
    underscored: true,
    // make it so that our model name stays lowercase in the database
    modelName: 'user'
  }
);

module.exports = User;