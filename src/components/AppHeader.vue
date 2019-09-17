<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">
      Logo
    </a>

    <div class="right menu">
      <a href="# " class="ui item" @click="login" >
        Logout / Login
      </a>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  methods:{
    ...mapActions(['login']) //VUEx method that connects ACTIONS to a component -> mapActions(['ActionName'])
  }
};
</script>


<style scoped>

</style>