<template>
  <div>
    <AppHeader />
    <router-view></router-view>  <!-- When VueRouter matches a route is gonna take the COMPONENT and place it here -->
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
