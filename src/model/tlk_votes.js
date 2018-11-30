// @flow
import {Sequelize, sequelize} from '../db'

const Vote = sequelize.define('tlk_votes', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  voter_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'tlk_users',
      key: 'id'
    }
  },
  submission_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'tlk_submissions',
      key: 'id'
    }
  }
}, {
  tableName: 'tlk_votes',
  underscored: true,
  timestamps: false,
})

Vote.sync({alter: false})

export default Vote
