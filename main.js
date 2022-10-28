import './style.css'

const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue World!',
      awesome: true,
      parentMessage: 'Parent',
      items: [{ message: 'Foo' }, { message: 'Bar' }],
    }
  },
})
app.mount('#app')
