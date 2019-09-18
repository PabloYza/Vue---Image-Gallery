<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Logo
    </a>

    <div class="right menu" >
      <div v-if="isLoggedIn" class="horizontal">
        <a class="item" href="">Gallery</a>
        <a class="item" href="">Upload</a>
        <a class="item" href="# " @click="logout" >Logout</a>
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