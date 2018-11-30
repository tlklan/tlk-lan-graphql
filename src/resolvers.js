// @flow
import Lan from './model/tlk_lans'
import Season from './model/tlk_seasons'
import User from './model/tlk_users'
import Image from './model/image'
import Competition from './model/tlk_competitions'
import {sequelize, Sequelize} from './db'
const Op = Sequelize.Op

Season.hasMany(Lan, {foreignKey: 'season_id'})
Lan.belongsTo(Season, {foreignKey: 'season_id'})
Lan.hasMany(Competition, {foreignKey: 'lan_id'})
Competition.belongsTo(Lan, {foreignKey: 'lan_id'})

sequelize.sync()

const Resolvers = {
  Query: {
    async getLans(obj: Object, params: Object) {
      const lans = await Lan.findAll({
        include: [{model: Season}, {model: Competition}]
      }).then(lans => {
        return lans
      })
      return lans
    }
  }
}

export default Resolvers
