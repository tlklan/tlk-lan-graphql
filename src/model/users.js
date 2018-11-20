// @flow
import {Sequelize, sequelize} from '../db'

const User = sequelize.define('tlk_users', {
  id: {type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true},
  name: {type: Sequelize.STRING(75), allowNull: false},
  email: {type: Sequelize.STRING(50), allowNull: false},
  username: {type: Sequelize.STRING(25), allowNull: false},
  nick: {type: Sequelize.STRING(25), allowNull: false},
  password: {type: Sequelize.STRING(60), defaultValue: null},
  image_id: {type: Sequelize.INTEGER(11), defaultValue: null},
  has_werket_login: {type: Sequelize.BOOLEAN, defaultValue: 0},
  date_added: {type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW},
})

User.sync({alter: false})

export default User
