// @flow
import {makeExecutableSchema} from 'graphql-tools'
import resolvers from './resolvers'

const schema = `
  type Lan {
    id: Int
    name: String
    tlk_season: Season
  }
  type Season {
    id: Int
    name: String
    start_year: Int
    end_year: Int
  }
  type Query {
    getLans: [Lan]
  }
`

const Schema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})

export default Schema
