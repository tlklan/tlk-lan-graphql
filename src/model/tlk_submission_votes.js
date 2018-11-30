// @flow
import {Sequelize, sequelize} from '../db'

const SubmissionVote = sequelize.define('tlk_submission_votes', {
  competition_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: '0'
  },
  user_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  submission_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: '0'
  },
  vote_count: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: '0'
  }
}, {
  tableName: 'tlk_submission_votes',
  underscored: true,
  timestamps: false,
})

SubmissionVote.sync({alter: false})

export default SubmissionVote
