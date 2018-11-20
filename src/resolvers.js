// @flow
import Lan from './model/lans'
import {sequelize, Sequelize} from './db'
const Op = Sequelize.Op

sequelize.sync()

const Resolvers = {
  Query: {
    async getLans(obj, params) {
      const lans = await Lan.findAll().then(lans => {
        return lans
      })
      return lans
    }
  }
}

export default Resolvers
