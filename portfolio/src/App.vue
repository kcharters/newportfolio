<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app
{
background-image: url('../public/img/Untitleddesign(1).png'), radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(255,255,255,1) 100%);
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-repeat: no-repeat;

}
@import'~bootstrap/dist/css/bootstrap.css';
</style>
