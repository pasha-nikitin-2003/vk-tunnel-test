// SERVER-URL 'http://localhost:3000'

// Вставь сюда свой https адрес от туннеля 
const WSS_URL = 'https://user521509297-gvkluqcd.wormhole.vk-apps.com/'

const io = require('socket.io-client')

const socket = io(WSS_URL)

socket.on('connect', () => {
  console.log('Connected to server')
  setInterval(() => {
    socket.emit('message', Buffer.from([0x00, 0x01, 0x02, 0x03]))
  }, 2000)
})

socket.on('message', (msg) => {
  console.log('Message from server:', msg)
})

socket.on('disconnect', () => {
  console.log('Disconnected from server')
})
