<template>
<<<<<<< HEAD
  <div id="app">
    <div style="margin-top: 7rem" class="container-fluid">
      <h1 class="text-center" style="color: #6f00ff7e; font-weight: 600"><u>Employ Now</u></h1>
      <div class="row container-fluid">
=======
  <div id="app" class="container-fluid">
    <div style="margin-top: 7rem">
      <h1 class="text-center" style="color: #6f00ff7e; font-weight: 600"><u>Employ Now</u></h1>
      <div class="row">
>>>>>>> cf46afb7dd1efdf60bb23fea6d4ced696b111633
        <div v-for="item in info" v-bind:key='item' class="col-md-4 my-2">
          <div class="card p-5 text-center">
            <img v-bind:src="item.avatar" alt="">
            <h3> {{item.first_name}}<br> {{item.last_name}} </h3>
            <p>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star-half-o" aria-hidden="true"></i>
            </p>
          </div>
          <div class="open" v-show="!collapsed">
            <div class="card text-center" style="height: 110px">
              <span style="font-size: 1.2rem; font-weight: 600">Email:</span>
              {{item.email}}
              <br>
              <span style="font-size: 1.2rem; font-weight: 600">Jobs:</span>
              {{item.id}}
            </div>
          </div>
        </div>
        <div class="btn text-center rounded m-auto" style="border: 2px solid #3700fc93">
            <span v-on:click="collapse" style="color: #3700fc93" v-show="collapsed">see more</span>
            <span v-on:click="build" style="color: #3700fc93" v-show="!collapsed">see less</span>
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
      info: [],
      collapsed: true
    }
  },
  methods: {
    collapse(){
      this.collapsed = false;
      
    },
    build(){
      this.collapsed = true
    }
  },
  mounted(){
    axios.get('https://reqres.in/api/users?page=2')
    .then(respond=>{
      this.info = respond.data.data;
    })
  }
}
</script>

<style>
  .card img{
    border: 1px solid #3700fc93;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 1rem auto;
  }
  .fa-star, .fa-star-half-o{
    color: #6f00ff7e
  }
  .open{
    animation: open 1s;
    /* animation-timing-function: ease; */
  }
  @keyframes open {
    from{height: 0px;}
    to{height: 110px;}
  }
</style>
