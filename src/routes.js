// @flow
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const Routes = (app: Object) => {
  app.use((req, res, next) => {
    console.log(Date.now(), req.originalUrl)
    next()
  })

  app.use('/', (error, req, res, next) => {}, graphqlHTTP(req => ({
    schema: schema,
    graphiql: true,
    rootValue: {req},
  })))
}

export default Routes
