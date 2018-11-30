// @flow
import {Sequelize, sequelize} from '../db'

const SuggestionVote = sequelize.define('tlk_suggestion_votes', {
  suggestion_id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'tlk_suggestions',
      key: 'id'
    }
  },
  user_id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'tlk_users',
      key: 'id'
    }
  }
}, {
  tableName: 'tlk_suggestion_votes',
  underscored: true,
  timestamps: false,
})

SuggestionVote.sync({alter: false})

export default SuggestionVote
