// @flow
import {makeExecutableSchema} from 'graphql-tools'
import resolvers from './resolvers'

const schema = `
  type Lan {
    id: Int
    name: String
    tlk_season: Season
    tlk_competitions: [Competition]
  }
  type Season {
    id: Int
    name: String
    start_year: Int
    end_year: Int
  }
  type Competition {
    id: Int
    short_name: String
    full_name: String
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
