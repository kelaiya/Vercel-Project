// client/api/data.js

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

const Connect = sequelize.define('Connect', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  message: DataTypes.TEXT,
}, {
  tableName: 'connects',
  timestamps: false,  // or true if you have createdAt, updatedAt
});

async function connectDB() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to DB:', error);
  }
}

export default async function handler(req, res) {
  await connectDB();
    console.log(res, "res")
    const { name, email, message } = req.body;

    try {
        await Submission.sync(); // creates table if not exists
        await Submission.create({ name, email, message });
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Database error: ' + error.message });
    }
}
