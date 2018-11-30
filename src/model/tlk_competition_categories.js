// @flow
import {Sequelize, sequelize} from '../db'

const CompetitionCategories = sequelize.define('tlk_competition_categories', {
  competition_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'tlk_competitions',
      key: 'id'
    }
  },
  category_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'tlk_competition_category',
      key: 'id'
    }
  }
}, {
  tableName: 'tlk_competition_categories',
  underscored: true,
  timestamps: false,
})

CompetitionCategories.sync({alter: false})

export default CompetitionCategories
