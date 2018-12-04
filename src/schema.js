// @flow
import {makeExecutableSchema} from 'graphql-tools'
import resolvers from './resolvers'

const schema = `
  type Lan {
    id: Int
    name: String
    tlk_season: Season
    tlk_competitions: [Competition]
    tlk_registrations: [Registration]
  }
  type Season {
    id: Int
    name: String
    start_year: Int
    end_year: Int
  }
  type Competitor {
    tlk_registration: Registration
  }
  type Competition {
    id: Int
    short_name: String
    full_name: String
    tlk_competitors: [Competitor]
  }
  type Query {
    getLans: [Lan]
  }
  type User {
    nick: String
  }
  type Registration {
    id: Int
    tlk_user: User
  }
`

const Schema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})

export default Schema
