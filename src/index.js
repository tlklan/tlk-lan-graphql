// @flow
import http from 'http'
import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'
dotenv.config()
const app = express()
app.set('port', process.env.PORT)
app.use(express.static('out'))

routes(app)

http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'))
})

if (module.hot) {
  module.hot.accept('./routes', () => {
    routes(app)
  })
}

export default app
