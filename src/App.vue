<template>
  <div id="app" v-cloak>
    <div id="router">
      <img src="./assets/menu.png" alt="#" class="menu_btn" v-on:click="showMenu = !showMenu">
      <a @click='routeTo("/")' class="logo">
        <img src="./assets/logo2.png" alt="#" id="green_logo">
        <img src="./assets/Logo_Final_orange_transparent.png" alt="" id="name_logo">
      </a>
      <router-link class="nav" to="/contact">Contact</router-link>
      <router-link class="nav" to="/people">People</router-link> 
      <router-link class="nav" to="/about">About</router-link>
    </div>
    <transition name="slide-fade" duration="300"> 
    <div id="mobile-menu" v-show="showMenu">
        <a @click='routeTo("/about")'>About</a>
        <a @click='routeTo("/people")'>People</a> 
        <a @click='routeTo("/contact")'>Contact</a>
      </div>
     </transition> 
    <transition name="fade" duration="1000">
       <router-view></router-view>
    </transition>

    <div class="mask" v-show="showMenu" v-on:click="showMenu = false"></div>
    <footer>Copyright {{currentYear}} © New Touch Digital, Inc. All rights reserved.</footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showMenu: false,
      currentYear: new Date().getYear() + 1900
    }
  },
  methods: {
    routeTo: function (next) {
      this.showMenu = false
      this.$router.push(next)
    }
  }
}
</script>

<style>
/*Reset format and global setting*/
#app {
  font-family: AvenirNext-DemiBold,Helvetica Neue,Helvetica,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    -o-user-select: none;
    user-select: none;
  cursor:default;
}
body{overflow: hidden;}
[v-cloak] {display: none;}
textarea{resize: none;}
textarea, input{outline: none;}
a:hover,a:visited{text-decoration:none;}
a{text-decoration: none;}
li{list-style: none;}
img { max-width: 100%;}

/*Global Navbar CSS*/
#router{
  font-size:1.25em;
  height:30px;
  font-weight: bold;
  position:relative;
  padding:10px 5% 30px 6%;
  background-color: rgba(210,210,210,0.8);
  z-index:10;
}
#router>a{
  display: block;
  color:black;
  width:10%;
  margin:15px 10px;
  float: right;
  padding-bottom: 17px;
  letter-spacing: 0.12em;
}
#router>a:hover{
  border-bottom: solid 5px rgba(255,102,51,0.5);
}
.router-link-exact-active{
  border-bottom: solid 5px rgba(255,102,51,0.9);
}
.logo{
  border-bottom:none!important;
  float: left!important;
  width:30%;
  min-width: 500px;
  cursor: pointer;
}
#green_logo{
  display: block;
  width:50px;
  height:50px;
  float: left;  
  margin:-15px 0 0 50px;
  }
#name_logo{
  width:300px;
  height: 33px;
  margin:-5px 0 0 10px;
  float: left;
}

footer{
  position:absolute;
  bottom:0;
  width:100%;
  font-size:0.8em;
  background-color: rgba(50,50,50,0.6);
  color:white;
  padding:10px 1% 5px;
  height:20px;
  text-align: left;
  z-index:12;
}

/*Page transition animation*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.menu_btn{
  display: none;
}
#mobile-menu{
  display: none;
}

@media screen and (max-device-width: 1000px) {
  #router{
  background-color: rgba(0,0,0,0.5);
  }
  .nav{
    display: none!important;
  }
  .menu_btn{
    display: block;
    width: 35px;
    height:25px;
    margin-top: 10px;
    float: left;
  }
  .logo{
    display: block;
    margin: 0px 0 0;
    padding: 0;
    min-width: 270px;
  }
  #green_logo{
  display: block;
  width:30px;
  height:30px;
  margin: -5px 0 0 35px;
  }
  #name_logo{
  width:180px;
  height: 25px;
  margin:0 0 0 10px;
  float: left;
  }
  footer{
  display: none;
  }
  #mobile-menu{
  display: block;
  position: absolute;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  color: white;
  font-weight: bold;
  padding: 15px 0;
  line-height: 20px;
  z-index:15;
  }
  #mobile-menu a{
    width:100%;
    color:white;
    margin:-10px 8% 10px;
    border: none!important;
  }
  .mask{
      min-width:100%;
      min-height: 100%;
      background-color: rgba(0,0,0,0.75);
      position: absolute;
      margin-top: 50px;
      z-index: 12;
  }
  .slide-fade-enter-active{
    transition: all .5s ease;
  }
  .slide-fade-leave-active{
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(-10px);
  opacity: 0;
  }


}

</style>
