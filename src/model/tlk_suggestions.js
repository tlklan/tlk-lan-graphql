// @flow
import {Sequelize, sequelize} from '../db'

const Suggestion = sequelize.define('tlk_suggestions', {
  id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    references: {
      model: 'tlk_users',
      key: 'id'
    }
  },
  created: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  tableName: 'tlk_suggestions',
  underscored: true,
  timestamps: false,
})

Suggestion.sync({alter: false})

export default Suggestion
