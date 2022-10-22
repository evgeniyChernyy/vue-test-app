<template>
    <div class="page">
        <div class="container">
            <div class="auth-form-block full-height">
                <div class="form-container auth-form-container">
                    <form id="authForm" class="form-container__form" v-on:submit.prevent="sendForm">
                        <label for="authEmail" class="form-container__label">Enter email:</label><br>
                        <input id="authEmail" class="form-container__input" type="email" name="email"><br>
                        <label for="authPassword" class="form-container__label">Enter password:</label><br>
                        <input id="authPassword" class="form-container__input" type="password" name="password">
                        <br>
                        <button type="submit" class="form-container__btn">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import router from "../router";

    export default {
        name: "Home",
        methods:{
            async sendForm(){
                if(!document.forms.authForm.email.value || !document.forms.authForm.password.value) {
                    alert("Empty data!")
                    return;
                }

                try{
                    let res = await axios.post(process.env.VUE_APP_API_URL,new FormData(document.forms.authForm))
                    let userData = res.data

                    localStorage.setItem("userData",JSON.stringify(userData))
                    this.$store.commit("setUserData",userData)
                    await router.push("/account")

                } catch(e){
                    if(e.response.status === 401){
                        this.$emit("showPopup","The email address or password is incorrect.")
                    }
                }

            }
        },
        beforeCreate() {
            let userData = localStorage.getItem("userData")
            if(userData){
                router.push("/account")
            }
        }
    }
</script>