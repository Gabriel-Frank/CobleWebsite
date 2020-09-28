<template>
  <div id="app">
   <bar></bar>
   <router-view></router-view>
   <bottom></bottom>
  </div>
</template>

<script>
import header from './components/views/header'
import footer from './components/views/footer'

export default {
  name: 'App',
  components: {
    'bar': header,
    'bottom': footer
  }
}
</script>

<style>
  body{
    padding: 0 !important;
    margin: 0 !important;
  }
</style>
