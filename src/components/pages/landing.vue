<template>
  <div id="app">
    <div class="hero text-white">
        <div>
            <div class="text-center">
                <span style="font-weight: 600; font-size: 77px" class="head">Welcome to Cobly</span><br>
                <h4>Top Freelancing site just for Developers</h4>
                <div class="d-inline-flex text-center">
                    <router-link to="/sign_in">
                        <button class="btn pop">Sign in</button>
                    </router-link>    
                </div> 
            </div>        
        </div>   
    </div>
    <section class="main">
        <div class="container py-5">
            <div class="mb-5">
                <h2> <u>What is Cobly?</u> </h2>
                <p>Cobly is a freelance community that focuses on <br>managing & promoting 
                human resourses in the Tech World. <br>Here in colby we manage user data according 
                to their fields and skills<br> ensuring the best pick for customers. In Cobly, 
                there are different<br> categories in which there are rankings/Rating for each User,
                <br>thus aiding decision making of the client.  
                </p>
            </div>
            <div style="margin-top: 5rem">
                <h2> <u>Why Cobly?</u> </h2>
                <p>
                    Cobly is safe & trusted and user data is handeled accurately.<br> Cobly ensures that 
                    all Users are treated fairly in the ranking process, <br>  we also take care of sorting out options
                    in order to <br>  make customers interaction simpler and more comfortable. <br> 
                    @ Cobly we make it easier to work from home in obervation of the COVID-19 pandemic in order to enhance saftey and productivity world wide.     
                </p>
            </div>
        </div>
        <div class="text-center mt-5 container-fluid">
            <div class="text-center text-white rounded pt-2 rounder m-auto p-1 pt-3" style="background: linear-gradient(to bottom, #6200ffee, #a890ff); width: fit-content">
                <h3 style="font-size: 2.5rem; font-weight: 600;"><u>Departments</u></h3>
            </div>
            <div class="card-deck container-fluide my-5">
                <div class="card text-center">
                    <div class="m-2">
                        <i class="fa fa-html5 m-1" aria-hidden="true" style="font-size: 5rem; color: #3700fce3"></i>
                        <br>
                        <h3>Front End <br> Developers</h3>
                        <hr style="background: black; width: 80%;">
                    </div>
                    <router-link to="/data"><button class="btn pop employ p-3 mb-3"> <i class="fa fa-briefcase" aria-hidden="true"></i> </button></router-link>
                </div>
                <div class="card text-center">
                    <div class="m-2">
                        <i class="fab fa-php m-1" style="font-size: 5rem; color: #3700fce3"></i>
                        <br>
                        <h3>Back End <br> Developers</h3>
                        <hr style="background: black; width: 80%;">
                    </div>
                    <router-link to="/data"><button class="btn pop employ p-3 mb-3"> <i class="fa fa-briefcase" aria-hidden="true"></i> </button></router-link>
                </div>
                <div class="card text-center">
                    <div class="m-2">
                        <i class="far fa-window-maximize m-1" style="font-size: 5rem; color: #3700fce3"></i>
                        <br>
                        <h3>UI/UX <br>Designers</h3>
                        <hr style="background: black; width: 80%;">
                    </div>
                    <router-link to="/data"><button class="btn pop employ p-3 mb-3"> <i class="fa fa-briefcase" aria-hidden="true"></i> </button></router-link>
                </div>
            </div>
            <div class="card-deck container-fluide">
                <div class="card text-center">
                    <div class="m-2">
                        <i class="fas fa-globe m-1" style="font-size: 5rem; color: #3700fce3"></i>
                        <i class="fas fa-dollar-sign text-white" style="position: absolute; left: 130px; top: 24px; font-size: 3rem;"></i>
                        <br>
                        <h3>Digital <br> Marketers</h3>
                        <hr style="background: black; width: 80%;">
                    </div>
                    <router-link to="/data"><button class="btn pop employ p-3 mb-3"> <i class="fa fa-briefcase" aria-hidden="true"></i> </button></router-link>
                </div>
                <div class="card text-center">
                    <div class="m-2">
                        <i class="fa fa-android m-1" style="font-size: 5rem; color: #3700fce3"></i>
                        <br>
                        <h3>Android <br> Developers</h3>
                        <hr style="background: black; width: 80%;">
                    </div>
                    <router-link to="/data"><button class="btn pop employ p-3 mb-3"> <i class="fa fa-briefcase" aria-hidden="true"></i> </button></router-link>
                </div>
                <div class="card text-center">
                    <div class="m-2">
                        <i class="fa fa-apple m-1" aria-hidden="true" style="font-size: 5rem; color: #3700fce3"></i>
                        <br>
                        <h3>IOS <br> Developers</h3>
                        <hr style="background: black; width: 80%;">
                    </div>
                    <router-link to="/data"><button class="btn pop employ p-3 mb-3"> <i class="fa fa-briefcase" aria-hidden="true"></i> </button></router-link>
                </div>
            </div>
            <div class="card text-center last-card">
                <div class="m-2">
                    <i class="fa fa-gamepad m-1" aria-hidden="true" style="font-size: 5rem; color: #3700fce3"></i>
                    <br>
                    <h3>Game <br> Developers</h3>
                    <hr style="background: black; width: 80%;">
                </div>
                <router-link to="/data"><button class="btn pop employ p-3 mb-3"> <i class="fa fa-briefcase" aria-hidden="true"></i> </button></router-link>
            </div>
        </div>
        <div class="my-5 pt-5">
            <div class="text-center text-white rounded pt-2 rounder m-auto p-1 pt-3" style="background: linear-gradient(to bottom, #6200ffee, #a890ff); width: fit-content">
                <h3 style="font-size: 2.5rem; font-weight: 600;"><u>Our Team</u></h3>
            </div>
            <div class="container my-5">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="~@/assets/profile-1.jpg" class="d-block wit rounded-circle m-auto" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <p>Contributor</p>
                            <h3>Frank Gabriel</h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="~@/assets/blank-profile.png" class="d-block wit rounded-circle m-auto" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <p>Contributor</p>
                            <h3>Akaninyene Umoh</h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="~@/assets/FB_IMG_MARY.jpg" class="d-block wit rounded-circle m-auto" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <p>Contributor</p>
                            <h3>Maryann Osuyak</h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="~@/assets/ifa-pic.jpg" class="d-block wit rounded-circle m-auto" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <p>Contributor</p>
                            <h3>Joseph Ifamama</h3>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="fa fa-angle-left" aria-hidden="true" style="color: black !important; font-size: 2rem"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="fa fa-angle-right" aria-hidden="true" style="color: black !important; font-size: 2rem"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            </div>
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

<style>
    .hero{
        background: linear-gradient(to right, #3700fc93, #ffffff00), url("~@/assets/pexels-negative-space-160107.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center #a890ff;
        padding-top: 10rem;
        padding-bottom: 10rem;
    }
    a{
        text-decoration: none;
        color: #3700fc93;
    }
    p{
        font-size: 1.2rem;
    }
    .pop{
        background-color: #3700fce3;
        color: #ffff;
        padding-top: 1rem;
        border: none;
    }
    .btn-2{
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .btn-1{
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    h2{
        font-weight: 600;
        font-size: 3rem;
    }
    .employ{
        border-radius: 50%;
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
        margin: 0 auto;
    }
    .last-card{
        margin: 20px auto;
        width: 40%;
    }
    .select{
        border-color: #dad8d8;
        border-radius: 6px;
        background-color: transparent;
        width: 150px;
    }
    #register{
        background-color: #c5a1d6;
    }
    .wit{
        width: 230px;
        height: 230px;
    }
    @media screen and (max-width: 800px){
        .hero{
            background-position: initial;
            
        }
        .head{
            font-size: 60px !important;
        }
        .last-card{
        margin: 20px auto;
        width: 100%;
    }
    }
</style>
