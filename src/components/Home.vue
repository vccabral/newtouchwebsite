<template>
  <div id="home">
    <img id="logo" src="../assets/Logo_Final_orange_transparent.png" alt="#">
    <p>THE NEXT STEP IN DIGITAL HEALTHCARE</p>
    <router-link to="/about" class="more"> Explore More
    </router-link>
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
    background: url(../assets/bg_home.jpg) no-repeat;
    width:100%;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-size: cover;
    justify-content: center;
}
.bg-color{
      width:100%;
      height: 100%;
      background-color: rgba(13, 70, 83, 0.3);
      position: relative;
      z-index: 2;
}
#logo{
  width: 60%;
  position: relative;
  float: left;
  margin:20% 0 0 20%;
  z-index: 4;
}
#home>p{
  width: 60%;
  color:white;
  font-size:1.9em;
  font-weight: bolder;
  font-family: 'Candal', sans-serif;
  position: relative;
  float: left;
  margin:3% 0 0 20%;
  z-index: 4;
}
.more{
  width: 150px;
  color:white;
  background-color: transparent;
  border: solid white 3px;
  border-radius: 20px;
  font-size:1em;
  position: relative;
  float: left;
  padding: 10px 20px 10px 20px;
  cursor: pointer; 
  margin:8% 0 0 42%;
  z-index: 4;
}

@media screen and (max-device-width: 1080px) {
  #home>p{
    font-size:1.5em;
    width:50%;
  }
}
</style>
