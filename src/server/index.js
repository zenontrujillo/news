import Express from 'express'
import { Server as HttpServer } from 'http'
import { default as SocketIOServer } from 'socket.io'

const app = new Express()
const http = new HttpServer(app)
const io = new SocketIOServer(http).of('/booty-ws')

app.get('/', (req, res) => {
	res.send('<h1>lol!</h1>')
})

app.get('/try-me', (req, res) => {
	res.send('<h1>Yay!!</h1>')
})

io.on('connection', (socket) => {
	console.log(`socket ${socket.id} connected!`)
	socket.broadcast.emit('USER_CONNECTED') // everyone gets it but the sender
})

const port = 3030
const ip = '127.0.0.1'
http.listen(port, ip)
