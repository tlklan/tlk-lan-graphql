// @flow
import {Sequelize, sequelize} from '../db'

const Registration = sequelize.define('tlk_registrations', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  lan_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'tlk_lans',
      key: 'id'
    }
  },
  user_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'tlk_users',
      key: 'id'
    }
  },
  device: {
    type: Sequelize.ENUM('desktop','laptop','console'),
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  never_showed: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: '0'
  }
}, {
  tableName: 'tlk_registrations',
  underscored: true,
  timestamps: false,
})

Registration.sync({alter: false})

export default Registration
