import { createApp } from 'vue'
import App from './App.vue'
import Modal from '../node_modules/bootstrap/js/dist/modal'
createApp(App).mount('#app')
// bootstrap/js/dist/modal
new Modal(document.querySelector('.modal'), {
  backdrop:"static",
})

const focusEl = document.querySelector('#exampleInputEmail1')
const modalEl = document.querySelector('#exampleModal')

modalEl.addEventListener('shown.bs.modal',function(){
  focusEl.focus()
})