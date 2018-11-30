// @flow
import {Sequelize, sequelize} from '../db'

const User = sequelize.define('tlk_users', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(75),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  username: {
    type: Sequelize.STRING(25),
    allowNull: false
  },
  nick: {
    type: Sequelize.STRING(25),
    allowNull: false
  },
  password: {
    type: Sequelize.CHAR(60),
    allowNull: true
  },
  image_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    references: {
      model: 'image',
      key: 'id'
    }
  },
  has_werket_login: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: '0'
  },
  date_added: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  tableName: 'tlk_users',
  underscored: true,
  timestamps: false,
})

User.sync({alter: false})

export default User
