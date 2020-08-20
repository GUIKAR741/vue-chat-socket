<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col cols='12'>
        <h1>Chat</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Sala:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="chat.room"
            type="text"
            required
            placeholder="Digite a sala"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Nome:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="chat.name"
            type="text"
            required
            placeholder="Digite seu Nome"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Enviar</b-button>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      chat: {
        room: '',
        name: '',
      },
    }
  },
  mounted () {
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$router.push({ name: 'chat', params: this.chat })
      // const self = this
      // this.$axios.post('/', this.chat)
      //   .then(resp => {
      //     if (Object.keys(resp.data).includes('status') && resp.data.status === 'Logado') {
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    },
  },
}
</script>
