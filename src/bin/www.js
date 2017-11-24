import {app} from '../bongio.me'
import http from 'http'

const port = process.env.PORT || '4000'
app.set('port', port)

const server = http.createServer(app)
server.listen(port)

console.log('Started app on port ' + port)
