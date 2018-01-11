<template>
  <div id="people">
        <div id="main-wrapper">
          <p>People on our team</p>
          <ul>
            <li v-for="people in team">
              <img v-bind:src="people.image" alt="#">
              <p>{{people.name}}</p>
              <p>{{people.position}}</p>
            </li>
          </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: 'People',
  data () {
    return {
      team: [
        {
          name: 'Atila Omer',
          position: 'Co-Founder & Chief Executive Officer  ',
          image: require('../assets/people/atila.jpg')
        },
        {
          name: 'Alex Ksendzovsky, MD',
          position: 'Co-Founder & Chief Science Officer',
          image: require('../assets/people/alex.jpg')
        },
        {
          name: 'Jonathan Pomeraniec, MD',
          position: 'Co-Founder & Chief Medical Officer',
          image: require('../assets/people/jonathan.jpg')
        }/*,
        {
          name: 'Chris Cabral',
          position: 'Co-Founder & Chief Technology Officer',
          image: require('../assets/people/chris.jpg')
        }  */
      ]
    }
  }
}
</script>

<style scoped>
#people{
    background: url(../assets/bg_people.jpg) no-repeat;
    width:100%;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-size: cover;
    justify-content: center;
}
#main-wrapper{
    position: relative;
    width: 80%;
    min-height: 40%;
    margin: 15% 10%;
    padding:3%;
    text-align: left;
    font-size:1em;
    font-weight: bold;
    background-color: rgba(0,0,0,0.7);
    color:white;
}
#main-wrapper>p{
  font-size:1.5em;
  margin-bottom:5%;
}
#main-wrapper>ul{
  margin:10px;
  font-size:0.7em;
  position: relative;
}
#main-wrapper>ul>li{
  text-align: center;
  width:25%;
  float: left;
  
}
#main-wrapper img{
  border-radius: 200px;
  width: 120px;
  height:120px;
}

</style>