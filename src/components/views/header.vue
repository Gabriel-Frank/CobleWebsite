<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg color-p fixed-top">
  <router-link to="/"><img src="~@/assets/logo.png" alt="" width="20%"></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa fa-bars text-white" aria-hidden="true"></i>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/blog">Blog</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/data">Employ</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/sign_in">Sign In</router-link>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
    .color-p{
        background: linear-gradient(to left, #0000ff85, #6f00ff7e);
    }
    nav{
      padding: 0 !important;
      margin: 0 !important;
    }
    .nav-link{
      color: white;
    }
</style>
