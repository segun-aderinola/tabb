<template>
  <div id="app">
    <HeaderComponent/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/header/HeaderComponent.vue';
// import HomeComponent from './pages/HomeComponent.vue';

export default {
  name: 'App',
  components:{
    // HomeComponent,
    HeaderComponent
  }
}
</script>

<style>
nav {
  display: flex;
  gap: 1rem;
}

router-link {
  text-decoration: none;
  color: blue;
}
</style>
