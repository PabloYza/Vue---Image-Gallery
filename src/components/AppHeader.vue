<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">
      Logo
    </router-link>

    <div class="right menu" >
      <div v-if="isLoggedIn" class="horizontal">
        <router-link class="item" to="/">Gallery</router-link>
        <router-link class="item" to="/upload">Upload</router-link>
        <a class="item" @click="logout" href="/" >Logout</a>
      </div>
      <a v-else href="# " class="ui item active item" @click="login" >
        Login
      </a>
    </div>

  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods:{
    ...mapActions(['login', 'logout']),//connects ACTIONS(methods that modify data inside the module) to a component -> mapActions(['ActionName','ActionName',... ])
  },
  computed: mapGetters(['isLoggedIn']),//connects GETTERS(information from the module) to a component -> mapGetters(['GetterName','GetterName',... ])
};
</script>


<style scoped>

  .horizontal {
    display: flex;
    flex-direction: row;
  }


</style>