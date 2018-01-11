<template>
  <div id="app" v-cloak>
    <div id="router">
      <router-link to="/" class="logo">
        <img src="./assets/logo.png" alt="#" id="green_logo">
        <img src="./assets/name_logo.png" alt="" id="name_logo">
      </router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/people">People</router-link> 
      <router-link to="/about">About</router-link>
    </div>
    <transition name="fade" duration="1000">
       <router-view></router-view>
    </transition>
    <footer>Copyright {{current_year}} © New Touch Digital, Inc. All rights reserved.</footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      current_year: new Date().getYear() + 1900
    }
  }
}
</script>

<style>
body{
  overflow: hidden;
}
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
[v-cloak] {
  display: none;
}
textarea{
  resize: none;
}
textarea, input{
  outline: none;
}
a:hover,a:visited{text-decoration:none;}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
#router{
  font-size:1.1em;;
  height:30px;
  font-weight: bold;
  position:relative;
  padding:10px 3% 30px 6%;
  background-color: rgba(60,60,60,0.5);
  z-index:10;
}
#router>a{
  display: block;
  color:white;
  width:10%;
  margin:15px 10px;
  float: right;
  padding-bottom: 21px;
  letter-spacing: 0.12em;
}
#router>a:hover{
  border-bottom: solid 5px rgba(255,255,255,0.3);
}
.router-link-exact-active{
  border-bottom: solid 5px white;
}
.logo{
  border-bottom:none!important;
  float: left!important;
  width:25%!important;
  min-width: 350px!important;
}
#green_logo{
  display: block;
  width:50px;
  height:50px;
  float: left;  
  margin:-15px 0 0 50px;
  }
#name_logo{
  width:210px;
  height: 30px;
  margin:-5px 0 0 10px;
  float: left;
}
footer{
  position:absolute;
  bottom:0;
  width:98%;
  font-size:0.9em;
  background-color: rgba(50,50,50,0.6);
  color:white;
  padding:10px 1% 5px;
  height:20px;
  text-align: left;
  z-index:12;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
