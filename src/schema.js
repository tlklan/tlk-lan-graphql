// @flow
import {makeExecutableSchema} from 'graphql-tools'
import resolvers from './resolvers'

const schema = `
  type Lan {
    id: Int
    name: String
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
