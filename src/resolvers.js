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
Registration.hasOne(ActualCompetitor, {foreignKey: 'registration_id'})
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
        }, {
          model: Registration,
          include: [User]
        }]
      }).then(lans => {
        return lans
      })
      return lans
    },
    async getWinners() {
      const winners = await ActualCompetitor.findAll({
        include: [{
          model: Registration,
          include: [{model: User},{model: Lan}]
        }, {
          model: Competition,
        }],
        where: {position: {[Op.eq]: 1}}
      }).then(winners => {
        return winners
      })
      return winners
    },
    async getWinCount() {
      const winners = await sequelize.query(`
        SELECT u.nick, count(*) as wins
        FROM tlk_actual_competitors ac, tlk_users u, tlk_registrations r
        WHERE ac.position = 1
        and ac.registration_id = r.id
        and r.user_id = u.id
        GROUP BY u.nick
        ORDER BY wins DESC
      `).then(winners => {
        return winners[0]
      })
      return winners
    },
    async getActiveLanInfo() {
      const active = await Lan.findOne({
        include: [{
          model: Registration,
          include: [{
            model: User
          }]
        }, {
          model: Competition,
        }],
        where: {
          enabled: {
            [Op.eq]: true
          }
        }
      }).then(active => {
        return active
      })
      return active
    }
  }
}

export default Resolvers
