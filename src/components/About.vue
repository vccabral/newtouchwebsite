<template>
  <div id="about">
  	<div id="main-wrapper">
  		<p>NewTouch Digital is a health technology building a mobile health and data analytics platform to optimize clinical care for sufferers of neurodegenerative diseases.</p> 
  		<p>NewTouch Digital is based in Washington D.C. </p>
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
    margin: 15% 10%;
    padding:3%;
    text-align: left;
    font-size:1.5em;
    font-weight: bold;
    background-color: rgba(0,0,0,0.7);
    color:white;
}
#main-wrapper>p{
    margin-bottom: 5%;
}
</style>