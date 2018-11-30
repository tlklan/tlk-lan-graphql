// @flow
import {Sequelize, sequelize} from '../db'

const Competitor = sequelize.define('tlk_competitors', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  registration_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'tlk_registrations',
      key: 'id'
    }
  },
  competition_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'tlk_competitions',
      key: 'id'
    }
  }
}, {
  tableName: 'tlk_competitors',
  underscored: true,
  timestamps: false,
})
  
Competitor.sync({alter: false})
  
export default Competitor
