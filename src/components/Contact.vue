<template>
  <div id="contact">
    <div id="main-wrapper">
          
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#contact{
    background: url(../assets/bg_contact.jpg) no-repeat;
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
</style>