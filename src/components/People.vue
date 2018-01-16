<template>
  <div id="people">
        <div id="main-wrapper">
          <p>FOUNDERS</p>
          <ul>
            <li v-for="(people,index) in team" v-on:mouseover="hover_card = index"
              v-on:mouseout="hover_card=-1" v-bind:class="{ active: hover_card==index }">
              <img v-bind:src="people.image" alt="#">
              <p style="font-size:1.4em">{{people.name}}</p>
              <img src="../assets/linkedin-logo.png" class="linkedin-logo" Title="LinkedIn Profile" 
              v-if="hover_card==index" v-on:click="showLinkedin(people.link)">
              <p><span>{{people.position1}}&nbsp;&&nbsp;</span><br><span>{{people.position2}}</span></p>
            </li>
              <p v-if="hover_card>=0" id="info">{{team[hover_card].info}}</p>
          </ul>
        </div>
        
  </div>
</template>

<script>
export default {
  name: 'People',
  data () {
    return {
      hover_card: -1,
      team: [
        {
          name: 'Atila Omer',
          position1: 'Co-Founder',
          position2: 'President  ',
          link: 'https://www.linkedin.com/in/atila-omer-16b808/',
          image: require('../assets/people/atila.jpg'),
          info: `Atila is a founder and President of NewTouch Digital.  Prior to NewTouch Atila co-founded Collaborative Fusion Inc. (CFI), a technology firm which developed incident management software for identifying, alerting and coordination emergency personnel in times of disaster. From 2001 to 2011, Atila served as CEO of CFI which provided technology solutions to the public sector for local, state, and federal governmental agencies. In 2011, CFI was acquired by the Intermedix Corporation, a company owned by private equity firm Thomas H, Lee. Following the acquisition of CFI, Atila served as a Senior Vice President and was responsible for leading the Intermedix’ EMSystems Division. Atila holds a B.S. in Finance from Wayne State University, and an MBA from Carnegie Mellon University. `
        },
        {
          name: 'Alex Ksendzovsky, MD',
          position1: 'Co-Founder',
          position2: 'Chief Science Officer',
          link: 'https://www.linkedin.com/in/alexander-ksendzovsky-31732711/',
          image: require('../assets/people/alex.jpg'),
          info: `Alexander Ksendzovsky, MD is a founder and Chief Science Officer of NewTouch Digital. Alex graduated from Emory University with a B.S. Neuroscience and Philosophy where he worked in several research laboratories focused on Parkinson’s disease. Alex graduated with an M.D. with distinction in research from The Chicago Medical School. Alex is currently a senior Resident Physician in the Department of Neurosurgery at the University of Virginia and Surgical Neurology Branch at the National Institutes of Health (NIH). He is pursuing an enfolded Ph.D. in molecular physiology and biological physics where he is focused on molecular and physiological mechanisms of epilepsy. Alex has published in central nervous system oncology, epilepsy, functional neurosurgery and pediatrics.  `
        },
        {
          name: 'Jonathan Pomeraniec, MD',
          position1: 'Co-Founder',
          position2: 'Chief Medical Officer',
          link: 'https://www.linkedin.com/in/jonathan-pomeraniec-785a294/',
          image: require('../assets/people/jon.png'),
          info: `Jonathan Pomeraniec, MD/MBA is a founder and Chief Medical Officer of NewTouch Digital. After completing undergraduate work at the Wharton School at the University of Pennsylvania, Jonathan worked as an analyst at Lehman Brothers and Barclays Capital. Jonathan transitioned to medicine by completing a postbaccalaureate degree at Columbia University and subsequently pursued an enfolded MD/MBA degree at the University of Virginia (UVA) School of Medicine and Darden School of Business. Jonathan is currently a resident in the joint UVA/National Institutes of Health (NIH) Neurosurgery residency program. `
        }
        /*,
        {
          name: 'Chris Cabral',
          position: 'Co-Founder & Chief Technology Officer',
          image: require('../assets/people/chris.jpg'),
          info: `Chris Cabral is a founder and Chief Technology Officer of NewTouch Digital. Chris has spent the last 10 years in the technology industry focusing on Web Development, Cyber Security and Automated Systems Management. As a senior technologist, consulting for several Federal agencies, Chris built out continuous deployment solutions for the Consumer Financial Protection Bureau and Continuous Monitoring Solutions for the assets inside the Department of Defense. Chris is an avid open source contributor whose accomplishments range from cross platform drawing tools in iOS and android to an open source training guides for ansible. He also personally maintains several ansible playbooks that are frequently used by the Consumer Finance Protection Bureau today to maintain their critical infrastructure. Chris graduated in 2007 from the Massachusetts Institute of Technology with a B.S. in Nuclear Science and Engineering. During that time he contributed to a the Journal of Biomedical Optics performing research and analysis on diffusion magnetic resonance imaging of mouse tongues. `
        } */
      ]
    }
  },
  methods: {
    showLinkedin (pageUrl) {
      window.open(pageUrl, '_blank')
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
    min-height: 60%;
    margin: 10% auto 10%;
    padding:3%;
    text-align: left;
    font-weight: bold;
    background-color: rgba(0,0,0,0.7);
    color:white;
}
#main-wrapper>p{
  font-size:1.5em;
  margin:10px 0 2%;
}
#main-wrapper>p>span{
   display: block;
   width:100%;
}
#main-wrapper>ul{
  margin:10px 0 0;
  font-size:0.7em;
  position: relative;
}
#main-wrapper>ul>li{
  text-align: center;
  width:23%;
  float: left;
  
}
#main-wrapper img{
  border-radius: 200px;
  width: 120px;
  height:120px;
  z-index: 10;
}
.linkedin-logo{
  width: 20px!important;
  height: 20px!important;
  cursor: pointer;
  float: right;
  margin: -5px 10px 0 0;
}
.active{
  margin-top: -10px;
  padding: 10px 0;
  color:black;
  background-color: rgba(230,230,230,0.8);
  box-shadow: 4px 0 0px 0 rgba(0,0,0,0.5); 
}
#info{
  background-color: rgba(230,230,230,0.8);
  box-shadow: 4px 8px 16px 0 rgba(0,0,0,0.3); 
  margin: 0;
  color: black;
  display: inline-block;
  line-height: 20px;
  padding: 2% 5%;
  text-align: left;
  float: left;
  z-index:5;
  min-width:350px!important;
  width: 78%;
}

@media screen and (max-device-width: 600px) {

   #main-wrapper{
    min-height: 80%;
     margin: 25% auto;
    pointer-events: none;
   }
    #main-wrapper ul{
    padding-left: 20px;
    font-size:0.5em;
    }
   #main-wrapper li{
    min-width: 110px;
    margin:15px;
   }
  p{
     font-size: 0.8em;
  }

#info{
  display: none!important;
}
}
</style>