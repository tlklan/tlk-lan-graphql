// @flow
import {Sequelize, sequelize} from '../db'

const Payment = sequelize.define('tlk_payments', {
  id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER(10),
    allowNull: false
  },
  lan_id: {
    type: Sequelize.INTEGER(10),
    allowNull: false
  },
  season_id: {
    type: Sequelize.INTEGER(10),
    allowNull: true
  },
  type: {
    type: Sequelize.ENUM('single','season'),
    allowNull: false
  }
}, {
  tableName: 'tlk_payments',
  underscored: true,
  timestamps: false,
})

Payment.sync({alter: false})

export default Payment
