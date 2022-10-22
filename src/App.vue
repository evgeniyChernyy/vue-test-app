<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <form id="authForm" v-on:submit.prevent="sendForm">
      <p>Enter email:</p>
      <input type="email" name="email">
      <p>Enter password:</p>
      <input type="password" name="password">
      <br>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: 'App',
    data(){
      return {

      }
    },
    methods:{
      async sendForm(){
        if(!document.forms.authForm.email.value || !document.forms.authForm.password.value) {
          alert("Empty data!")
          return;
        }

        let res = await axios.post(process.env.VUE_APP_API_URL,new FormData(document.forms.authForm))
        console.log(res.data)
      }
    },
    mounted(){
      console.log(process.env)
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
