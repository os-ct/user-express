const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

const User = require('./models/userModel')(sequelize);

const userRoutes = require('./routes/userRoutes')(sequelize);

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(async () => {
    console.log('Database connection established successfully.');
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
