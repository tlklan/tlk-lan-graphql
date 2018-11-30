// @flow
import {Sequelize, sequelize} from '../db'

const TranslatedMessage = sequelize.define('tlk_translated_messages', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  language: {
    type: Sequelize.STRING(16),
    allowNull: false,
    defaultValue: ''
  },
  translation: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  tableName: 'tlk_translated_messages',
  underscored: true,
  timestamps: false,
})

TranslatedMessage.sync({alter: false})

export default TranslatedMessage
