import scroll from 'raf-scroll.js'

const handlers = []

scroll( (y, prevY) => {
  for (let i = 0; i < handlers.length; i++) {
    handlers[i](y, prevY)
  }
})

export default (fn) => {
  handlers.push(fn)
}