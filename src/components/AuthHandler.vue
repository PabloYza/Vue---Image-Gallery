<template>
  <div>
    Please wait...
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthHandler',
  methods: mapActions(['finalizeLogin']),
  created(){ // Use this lifecycle method for DATA loading
  this.finalizeLogin(window.location.hash) // call the action from the AuthModule
            // this will return everything to the right of the #
  }
}
</script>