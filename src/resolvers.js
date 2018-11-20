// @flow
import Lan from './model/lans'
import Season from './model/seasons'
import {sequelize, Sequelize} from './db'
const Op = Sequelize.Op

Season.hasMany(Lan, {foreignKey: 'season_id', constraints: false})
Lan.belongsTo(Season, {foreignKey: 'season_id', constraints: false})

sequelize.sync()

const Resolvers = {
  Query: {
    async getLans(obj, params) {
      const lans = await Lan.findAll({
        include: [{model: Season}]
      }).then(lans => {
        return lans
      })
      return lans
    }
  }
}

export default Resolvers
