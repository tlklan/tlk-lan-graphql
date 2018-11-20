// @flow
import {Sequelize, sequelize} from '../db'

const Season = sequelize.define('tlk_seasons', {
  id: {type: Sequelize.INTEGER(10), primaryKey: true, autoIncrement: true},
  name: {type: Sequelize.STRING(20), allowNull: false},
  start_year: {type: Sequelize.INTEGER(4), allowNull: false},
  end_year: {type: Sequelize.INTEGER(4), allowNull: false},
},{
  freezeTableName: true,
  underscored: true,
  timestamps: false,
})

Season.sync({alter: false})

export default Season
