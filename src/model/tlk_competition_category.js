// @flow
import {Sequelize, sequelize} from '../db'

const CompetitionCategory = sequelize.define('tlk_competition_category', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'tlk_competition_category',
  underscored: true,
  timestamps: false,
})
  
CompetitionCategory.sync({alter: false})
  
export default CompetitionCategory
