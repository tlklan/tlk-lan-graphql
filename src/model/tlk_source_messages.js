// @flow
import {Sequelize, sequelize} from '../db'

const SourceMessage = sequelize.define('tlk_source_messages', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  category: {
    type: Sequelize.STRING(32),
    allowNull: true
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  used: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: '1'
  }
}, {
  tableName: 'tlk_source_messages',
  underscored: true,
  timestamps: false,
})

SourceMessage.sync({alter: false})

export default SourceMessage
