// @flow
import {Sequelize, sequelize} from '../db'

const Submission = sequelize.define('tlk_submissions', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  competition_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    references: {
      model: 'tlk_competitions',
      key: 'id'
    }
  },
  user_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    references: {
      model: 'tlk_users',
      key: 'id'
    }
  },
  name: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  physical_path: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  size: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: '0'
  },
  comments: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  disqualified: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: '0'
  }
}, {
  tableName: 'tlk_submissions',
  underscored: true,
  timestamps: false,
})

Submission.sync({alter: false})

export default Submission
