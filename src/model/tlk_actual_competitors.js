// @flow
import {Sequelize, sequelize} from '../db'

const ActualCompetitor = sequelize.define('tlk_actual_competitors', {
  id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  registration_id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    references: {
      model: 'tlk_registrations',
      key: 'id'
    }
  },
  competition_id: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    references: {
      model: 'tlk_competitions',
      key: 'id'
    }
  },
  position: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  }
}, {
  tableName: 'tlk_actual_competitors',
  underscored: true,
  timestamps: false,
})

ActualCompetitor.sync({alter: false})

export default ActualCompetitor
