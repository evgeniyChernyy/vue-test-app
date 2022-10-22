<template>
    <div class="page">
        <div class="container">
            <div class="account-block full-height">
                <div class="user-profile">
                    <div class="user-profile__avatar-cont">
                        <img :src="'/' + $store.state.userAvatar" alt="" class="user-profile__avatar">
                    </div>
                    <p class="user-profile__user-name">{{ $store.state.userName}}</p>
                    <p class="user-profile__user-role">{{$store.state.userRole}}</p>
                    <p class="user-profile__user-reg-date">Registered:<br>{{$store.state.userRegDate}}</p>
                    <p class="user-profile__user-reputation"><img src="@/assets/img/star.svg" class="user-profile__reputation-star" alt=""> {{$store.state.userReputation}}</p>
                </div>
                <div class="user-msgs">
                    <p class="user-msgs__heading">Messages:</p>
                    <div class="user-msgs__msg-cont">
                        <div class="chat-message" v-for="msg in $store.state.userMessages" v-bind:key="msg.id">
                            <p class="chat-message__author">From: {{ msg.from}}</p>
                            <p class="chat-message__msg">Text: {{ msg.msg}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Account",
    }
</script>