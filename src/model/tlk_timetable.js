// @flow
import {Sequelize, sequelize} from '../db'

const Timetable = sequelize.define('tlk_timetable', {
  id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  lan_id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    references: {
      model: 'tlk_lans',
      key: 'id'
    }
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  start_time: {
    type: Sequelize.TIME,
    allowNull: true
  },
  end_time: {
    type: Sequelize.TIME,
    allowNull: true
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  type: {
    type: Sequelize.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'tlk_timetable',
  underscored: true,
  timestamps: false,
})

Timetable.sync({alter: false})

export default Timetable
