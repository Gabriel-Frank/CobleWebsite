<template>
  <div id="app">
    <div style="margin-top: 6rem">
      <h1 class="text-center" style="color: #6f00ff7e; font-weight: 600"><u>Developers Forum</u></h1>
    </div>
    <div v-for="posts in blog" v-bind:key="posts" class="card p-3 m-3">
      <h3 style="font-weight: 600"> {{posts.title}} </h3>
      <div style="border: 1px solid #6f00ff7e; color: #6f00ff7e; width: 70%"></div>
      <p class="my-1">
        {{posts.body}}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      blog: []
    }
  },
  mounted(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(respond=>{
      this.blog = respond.data;
    })
  }
}
</script>

<style scoped>
  h3{
    text-transform: uppercase;
  }
</style>
