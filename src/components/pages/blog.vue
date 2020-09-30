<template>
  <div id="app">
    <div style="margin-top: 6rem">
      <h1 class="text-center" style="color: #6f00ff7e; font-weight: 600"><u>Developers Forum</u></h1>
    </div>
    <div v-for="posts in blog" v-bind:key="posts" class="card p-3 m-3">
      <div class="book my-1">

      </div>
      <div>
        <h3 style="font-weight: 600"> {{posts.type}} </h3>
        <div style="border: 1px solid #6f00ff7e; color: #6f00ff7e; width: 60%"></div>
          <p class="my-1">
            {{posts.setup}}
          </p>
          <p>
            <span style="font-weight: 600">Return:</span> {{posts.punchline}}
          </p>
          <div class="text-right text-secondary">
            <span style="font-size: small">Posted by: user{{posts.id}}</span> 
          </div>
      </div>
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
      blog: [],
      general: '~@/assets/nerd.jpg',
      programming: "",
      display: "()"
    }
  },
  mounted(){
    axios.get('https://official-joke-api.appspot.com/jokes/ten')
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
  .card:hover{
      box-shadow: 0 7px 19px rgba(0,0,0,0.25);
  }
  .book{
    background: url('~@/assets/nerd.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    display: inline-flex !important;
    border-radius: 50%;
  }
  .card{
    display: inline-flex !important;
  }
</style>
