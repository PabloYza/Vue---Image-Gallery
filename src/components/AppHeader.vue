<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Logo
    </a>
    <div class="right menu" >
      <a v-if="isLoggedIn" class="active item" href="/" >
        Logout
      </a>
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
    ...mapActions(['login']),//connects ACTIONS(methods that modify data inside the module) to a component -> mapActions(['ActionName','ActionName',... ])
  },
  computed: mapGetters(['isLoggedIn']),//connects GETTERS(information from the module) to a component -> mapGetters(['GetterName','GetterName',... ])
};
</script>


<style scoped>

</style>