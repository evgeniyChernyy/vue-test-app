<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header__inner-cont">
          <div class="header__logo-cont">
            <router-link to="/"><img class="header__logo" alt="company logo" src="@/assets/img/logo.png"></router-link>
          </div>
        </div>
      </div>
    </header>

    <div class="info-popup" :class="{active:isInfoPopupActive}">
      <div class="info-popup__text">
        {{ infoPopupText }}
      </div>
    </div>
    <router-view @showPopup="showPopup">

    </router-view>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        isInfoPopupActive: false,
        infoPopupText: ""
      }
    },
    methods:{
      showPopup(msg){
        this.infoPopupText = msg
        this.isInfoPopupActive = true
        setTimeout(()=>{
          this.isInfoPopupActive = false
        },10000)
      }
    },
    beforeCreate() {
      let userData = localStorage.getItem("userData")
      if(userData){
        this.$store.commit("setUserData",JSON.parse(userData))
      }
      },
    mounted(){
      console.log(process.env)

    },
  }
</script>
<style>
  @import '../node_modules/typeface-roboto/index.css';
  @import "assets/css/reset.css";
  @import "assets/css/style.css";
</style>
