const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// sync is taking the models and connecting them to associated db tables.
// if it doesnt find a table, it will create it!
sequelize.sync({ force: false }).then(() => {
  // ({ force:false })
  // if using true, it would drop and re-create all the db tables on startup.
  app.listen(PORT, () => console.log('Now listening'));
});