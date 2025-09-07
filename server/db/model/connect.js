const Sequelize = require('sequelize')
const db = require('../db')

// Data model will contain information about the appoinments of patients.
const Connect = db.define('connect', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate:{
    	isEmail:true
    }
  },
  message: {
    type: Sequelize.TEXT
  }
})

module.exports = {Connect, db}