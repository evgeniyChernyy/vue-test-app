import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userName: null,
        userRegDate: null,
        userRole: null,
        userReputation: null,
        userAvatar: null,
        userMessages: null,
    },
    mutations: {
        setUserData(state,{name,regDate,role,reputation,avatar,messages}){
            if(name)
                state.userName = name
            if(regDate)
                state.userRegDate = regDate
            if(role)
                state.userRole = role
            if(reputation)
                state.userReputation = reputation
            if(avatar)
                state.userAvatar = avatar
            if(messages)
                state.userMessages = messages
        },
    }
})
