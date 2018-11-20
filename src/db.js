import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DBUSER,
  process.env.DBPASS,
  {
    host: process.env.DBHOST,
    dialect: 'mysql',
    operatorsAliases: false,
    logging: (process.env.NODE_ENV === 'development' ? console.log : false)
  })

sequelize.authenticate().then(() => {
  console.log('DB connection has been established succesfully.')
}).catch(err => {
  console.error('Unable to connect to database', err)
})

export {Sequelize, sequelize}
