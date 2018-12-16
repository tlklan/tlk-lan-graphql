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
  type ActualCompetitor {
    tlk_registration: Registration
    tlk_competition: Competition
    position: Int
  }
  type Competition {
    id: Int
    short_name: String
    full_name: String
  }
  type User {
    nick: String
    wins: Int
  }
  type Registration {
    id: Int
    tlk_user: User
    tlk_lan: Lan
  }
  type Query {
    getLans: [Lan]
    getWinners: [ActualCompetitor]
    getWinCount: [User]
    getActiveLanInfo: Lan
  }
`

const Schema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})

export default Schema
