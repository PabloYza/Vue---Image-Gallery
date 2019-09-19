<template>
  <div>
    <AppHeader />

    <div class="ui container">
      <router-view></router-view>  <!-- When VueRouter matches a route is gonna take the COMPONENT and place it here -->
    </div>
    
  </div>
</template>


<script>
import AppHeader from './components/AppHeader';


export default {
  name: 'App',
  components: {
    AppHeader
    }
}
</script>
