// @flow
import {Sequelize, sequelize} from '../db'

const Competition = sequelize.define('tlk_competitions', {
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
  display_order: {
    type: Sequelize.INTEGER(4),
    allowNull: false
  },
  short_name: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  full_name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  rules: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  votable: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: '0'
  },
  signupable: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: '0'
  },
  deadline: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {
  tableName: 'tlk_competitions',
  underscored: true,
  timestamps: false,
})

Competition.sync({alter: false})

export default Competition
