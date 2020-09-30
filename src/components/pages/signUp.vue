<template>
  <div id="app">
      <div class="text-center" style="margin-top: 15rem; margin-bottom: 25rem" v-show="!book">
          <i class="fa fa-check-circle-o text-success" aria-hidden="true" style="font-size: 20rem;" id="enter"></i>
          <br>
          <router-link style="color: #6f00ff7e" to="/" class="m-3">Back to Home</router-link>
      </div>
      <form class="sign rounded" v-show="book">
  <div class="form-group" >
    <label for="email">Email address</label>
    <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" v-model="password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div class="m-auto text-center">
      <button type="button" class="btn pop m-auto" v-on:click='check'>Submit</button>
  </div>
</form>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data(){
      return{
          email: "",
          password: "",
          book: true
      }
  },
  methods: {
      check(){
          if(this.email == "gabbygf04@gmail.com" || this.password == "play"){
              this.book = false
              document.querySelector('#enter').classList.add('enter')
          }
          else{
              alert('invalid E-mail or Password')
          }
      }
  }
}
</script>

<style scoped>
    .sign{
        margin: 10rem auto;
        width: 50%;
        border: 2px solid #0000ff85;
        padding: 4rem 2rem;
        margin-bottom: 24rem;
    }
    .pop{
        background-color: #3700fce3;
        color: #ffff;
        padding-top: 1rem;
        border: none;
        width: 100%;
    }
    .enter{
        animation: enterance;
        animation-duration: 1s;
        animation-timing-function: ease;
    }
    @media screen and (max-width: 600px){
        .sign{
            width: 70%;
        }
    }
    @keyframes enterance {
        from {font-size: 1px; opacity: 0.1;}
        to{font-size: 20rem; opacity: 1.0;}
    }
    
</style>