<template>
  <div id="app">
   <section class="vill container-fluid py-3">
     <div class="row">
       <div class="col-6 border-right text-center pt-5" style="padding: auto">
         <a href="https://github.com/Gabriel-Frank/CoblyWebsite" class="m-3">
          <i class="fa fa-github" aria-hidden="true" style="font-size: 3rem"></i>
        </a>
        <a href="https://web.facebook.com/groups/1257987751218173" class="m-3">
          <i class="fa fa-facebook" aria-hidden="true" style="font-size: 3rem"></i>
        </a>
        <a href="https://web.whatsapp.com/" class="m-3">
          <i class="fa fa-whatsapp" aria-hidden="true" style="font-size: 3rem"></i>
        </a>
       </div>
      <div class="col-6 text-white text-center smallie">
          <i class="fa fa-phone m-3" aria-hidden="true" style="font-size: 1.1rem"></i>
          <br>
          <span>+2348121937569, +2348135942428, +2348121937569, +2348121937569.</span>
          <br>
          <i class="fa fa-envelope m-3" aria-hidden="true" style="font-size: 1.1rem"></i>
          <br>
          <span>osuyakmayree@gmail.com, gabbygf04@gmail.com, josephifamama@gmail.com, gabbygf04@gmail.com.</span>
      </div>
     </div>
      <div class="text-center text-white mt-4 mb-2">
        <u>privacy.</u>
      </div>
   </section>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style scoped>
  .vill{
    background: linear-gradient(to top, #2f0b3893, #ffffff00), url("~@/assets/server_room.jpg") ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
  }
  .vill a{
    color: white;
  }
  .row{
    padding: 0 !important;
    margin: 0 !important;
  }
  @media screen and (max-width: 600px){
    .smallie{
      font-size: 12px
    }
  }
</style>
