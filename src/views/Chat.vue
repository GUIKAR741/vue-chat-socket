<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>
          Sala do Chat: {{room}}
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-textarea
        id="textarea"
        v-model="chat"
        rows="10"
        :disabled="true"
        no-resize
      ></b-textarea>
      <b-form @submit='send'>
        <b-form-group
          id="input-group-1"
          label="Mensagem:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="msg"
            type="text"
            placeholder="Digite a Mensagem"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Enviar</b-button>
        <b-button @click='sair' variant="danger">Sair</b-button>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'Chat',
  props: {
    name: {
      type: String,
      default: '',
    },
    room: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      socket: io('http://0.0.0.0:5000/chat'),
      chat: '',
      msg: '',
    }
  },
  methods: {
    sair () {
      this.socket.emit('left', { name: this.name, room: this.room }, () => {
        this.socket.disconnect()
        // go back to the login page
        this.$router.push({ name: 'home' })
      })
    },
    send (evt) {
      evt.preventDefault()
      this.socket.emit('text', { name: this.name, room: this.room, msg: this.msg })
      this.msg = ''
    },
  },
  created () {
    if (this.name === '' || this.room === '') {
      this.$router.push({ name: 'home' })
    }
  },
  mounted () {
    this.socket.on('connect', () => {
      this.socket.emit('joined', { name: this.name, room: this.room })
    })
    this.socket.on('status', (data) => {
      this.chat += '<' + data.msg + '>\n'
    })
    this.socket.on('message', (data) => {
      this.chat += data.msg + '\n'
    })
  },
}
</script>
