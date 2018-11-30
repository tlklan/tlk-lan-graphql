// @flow
import {Sequelize, sequelize} from '../db'

const Committee = sequelize.define('tlk_committee', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'tlk_users',
      key: 'id'
    }
  },
  year: {
    type: Sequelize.INTEGER(6),
    allowNull: false
  },
  position: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'tlk_committee',
  underscored: true,
  timestamps: false,
})

Committee.sync({alter: false})

export default Committee
