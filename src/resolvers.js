// @flow
import Lan from './model/tlk_lans'
import Season from './model/tlk_seasons'
import User from './model/tlk_users'
import Image from './model/image'
import Competition from './model/tlk_competitions'
import Registration from './model/tlk_registrations'
import Competitor from './model/tlk_competitors'
import ActualCompetitor from './model/tlk_actual_competitors'
import {sequelize, Sequelize} from './db'

const Op = Sequelize.Op

Season.hasMany(Lan, {foreignKey: 'season_id'})
Lan.belongsTo(Season, {foreignKey: 'season_id'})
Lan.hasMany(Competition, {foreignKey: 'lan_id'})
Competition.belongsTo(Lan, {foreignKey: 'lan_id'})
Lan.hasMany(Registration, {foreignKey: 'lan_id'})
User.hasMany(Registration, {foreignKey: 'user_id'})
Registration.belongsTo(Lan, {foreignKey: 'lan_id'})
Registration.belongsTo(User, {foreignKey: 'user_id'})
Competition.hasMany(Competitor, {foreignKey: 'competition_id'})
Competitor.belongsTo(Competition, {foreignKey: 'competition_id'})
Competitor.belongsTo(Registration, {foreignKey: 'registration_id'})
Competition.hasMany(ActualCompetitor, {foreignKey: 'competition_id'})
ActualCompetitor.belongsTo(Competition, {foreignKey: 'competition_id'})
ActualCompetitor.belongsTo(Registration, {foreignKey: 'registration_id'})

sequelize.sync()

const Resolvers = {
  Query: {
    async getLans(obj: Object, params: Object) {
      const lans = await Lan.findAll({
        include: [{
          model: Season
        }, {
          model: Competition,
          include: [{
            model: ActualCompetitor,
            include: [{
              model: Registration,
              include: [User]
            }]
          },{
            model: Competitor,
            include: [{
              model: Registration,
              include: [User]
            }]
          }]
        }, {
          model: Registration,
          include: [User]
        }]
      }).then(lans => {
        return lans
      })
      return lans
    }
  }
}

export default Resolvers
