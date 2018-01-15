<template>
  <div id="home">
    <div id="main-wrapper">
    <img id="logo" src="../assets/Logo_Final_orange_transparent.png" alt="#">
    <p>THE NEXT STEP IN DIGITAL HEALTHCARE</p>
    <router-link to="/about" class="more"> Explore More
    </router-link>
    </div>
    <div class="bg-color"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
    background: url(../assets/bg_about.jpg) no-repeat;
    width:100%;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-size: cover;
    justify-content: center;
}
#main-wrapper{
    position: relative;
    width: 60%;
    min-height: 50%;
    margin: 10% auto 10%;
    padding:3%;
    text-align: left;
    font-weight: bold;
    background-color: rgba(0,0,0,0.0);
    color:white;
}
#logo{
  width: 80%;
  position: relative;
  float: left;
  margin:5% 0 0 10%;
  z-index: 4;
}
#home p{
  width: 60%;
  color:white;
  font-size:2em;
  font-weight: bolder;
  font-family: 'Candal', sans-serif;
  text-align: center;
  position: relative;
  float: left;
  margin:3% 0 0 20%;
  z-index: 4;
}
.more{
  width: 150px;
  color:white;
  font-weight: bold;
  background-color: transparent;
  border: solid white 3px;
  border-radius: 20px;
  font-size:1em;
  position: relative;
  text-align: center;
  float: left;
  padding: 10px 20px 10px 20px;
  cursor: pointer; 
  margin:8% 0 0 42%;
  z-index: 4;
}

@media screen and (max-device-width: 1000px) {
#main-wrapper{
  margin-top: 35%;
}
  #logo{
    display: none;
  }
  #home p{
    font-size: 1.8em;
    width:20%;
    margin: 15% auto 15%;
    text-align: left;
  }
  .more{
    display: block;
    margin: 0 10%;
  }
}
</style>
