// @flow
import {Sequelize, sequelize} from '../db'

const Lan = sequelize.define('tlk_lans', {
  id: {type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true},
  season_id: {type: Sequelize.INTEGER(11), allowNull: true},
  name: {type: Sequelize.STRING(20), allowNull: false},
  reg_limit: {type: Sequelize.INTEGER(11), allowNull: false},
  start_date: {type: Sequelize.DATE},
  end_date: {type: Sequelize.DATE},
  location: {type: Sequelize.STRING(50), allowNull: false},
  enabled: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: 0}
},{
  freezeTableName: true,
  underscored: true,
  timestamps: false,
})

Lan.sync({alter: false})

export default Lan
