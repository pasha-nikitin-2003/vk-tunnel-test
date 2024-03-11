const TUNNEL_URL = 'https://user521509297-rtayg7hr.wormhole.vk-apps.com/'
const WSS_URL = 'wss://user521509297-rtayg7hr.wormhole.vk-apps.com/'

async function sendHttpRequest() {
  try {
    const response = await fetch(TUNNEL_URL)
    const data = await response.text()
    console.log(`Статус код ответа от HTTP сервера: ${response.status}`)
    console.log(`Полученные данные от HTTP сервера: ${data}`)
  } catch (error) {
    console.error(
      `Произошла ошибка при отправке HTTP запроса: ${error.message}`
    )
  }
}

setInterval(sendHttpRequest, 5000)

const io = require('socket.io-client')

const socket = io(WSS_URL)

socket.on('connect', () => {
  console.log('Connected to server')
  setInterval(() => socket.emit('message', 'Hello from client'), 2000)
})

socket.on('message', (msg) => {
  console.log('Message from server:', msg)
})

socket.on('disconnect', () => {
  console.log('Disconnected from server')
})
