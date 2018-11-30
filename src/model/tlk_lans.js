// @flow
import {Sequelize, sequelize} from '../db'

const Lan = sequelize.define('tlk_lans', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  season_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    references: {
      model: 'tlk_seasons',
      key: 'id'
    }
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  reg_limit: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
  start_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  end_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  enabled: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: '0'
  }
}, {
  tableName: 'tlk_lans',
  underscored: true,
  timestamps: false,
})

Lan.sync({alter: false})

export default Lan
