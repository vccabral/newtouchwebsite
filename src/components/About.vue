<template>
  <div id="about">
  	<div id="main-wrapper">
  		<h1>ABOUT US</h1>
  		<p>NewTouch Digital is a health technology building a mobile health and data analytics platform to optimize clinical care for sufferers of neurodegenerative diseases.<br/>
  		NewTouch Digital is based in Washington D.C.</p>
  		<h1>MISSION</h1>
  		<p>Our mission is to digitally reshape and improve the model of care for a broad range of neurodegenerative diseases by embedding NewTouch’s clinical platform and data analytical tools with doctors, patients, and industry partners. 
	               </p>	
  	</div>
   </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#about{
    background: url(../assets/bg_about.jpg) no-repeat;
    width:100%;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-size: cover;
    justify-content: center;
}
#main-wrapper{
    position: relative;
    width: 80%;
    margin: 10% 10%;
    padding:0.5% 3% 3%;
    text-align: left;
    font-size:1.2em;
    background-color: rgba(0,0,0,0.7);
    color:white;
}
h1{
    font-size:1.2em;
    font-weight: bold;
    margin-top:5%;
}
#main-wrapper>p{
    margin-bottom: 1%;
    line-height: 35px;
}

@media screen and (max-device-width: 600px) {

   #main-wrapper{
     margin: 25% auto;
   }
  p{
     font-size: 0.8em;
  }
}
</style>