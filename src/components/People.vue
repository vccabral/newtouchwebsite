<template>
  <div id="people">
        <div id="main-wrapper">
          <p>People on our team</p>
          <ul>
            <li v-for="(people,index) in team" v-on:mouseover="hover_card = index"
              v-on:mouseout="hover_card=-1" v-bind:class="{ active: hover_card==index }">
              <img v-bind:src="people.image" alt="#" v-on:click="showLinkedin(people.link)">
              <p>{{people.name}}</p>
              <p>{{people.position}}</p>
              <p v-show="hover_card==index" id="info">{{people.info}}</p>
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
      hover_card: -1,
      team: [
        {
          name: 'Atila Omer',
          position: 'Co-Founder & Chief Executive Officer  ',
          link: 'https://www.linkedin.com/in/atila-omer-16b808/',
          image: require('../assets/people/atila.jpg'),
          info: `Atila is a founder and Chief Executive Officer of NewTouch Digital.  Prior to NewTouch Atila co-founded Collaborative Fusion Inc. (CFI), a technology firm which developed incident management software for identifying, alerting and coordination emergency personnel in times of disaster. CFI was founded out of Carnegie Mellon University. From 2001 to 2011, Atila served as CEO of CFI which provided technology solutions to the public sector for local, state, and federal governmental agencies. CFI was selected as one of the "50 Best Places to Work in Western Pennsylvania" for 5 consecutive years from 2007 to 2011 by the Pittsburgh Business Times. In September 2011, CFI was acquired by the Intermedix Corporation, a company owned by private equity firm Thomas H, Lee. Following the acquisition of CFI, Atila served as a Senior Vice President and was responsible for leading the Intermedix’ EMSystems Division. EMSystems' technology protects over 80% of the U.S. population along with public agencies, major corporations, universities, and health systems in over 30 countries. Atila holds a Bachelor of Science Degree in Finance from Wayne State University, and an MBA from Carnegie Mellon University. `
        },
        {
          name: 'Alex Ksendzovsky, MD',
          position: 'Co-Founder & Chief Science Officer',
          link: 'https://www.linkedin.com/in/alexander-ksendzovsky-31732711/',
          image: require('../assets/people/alex.jpg'),
          info: `Alexander Ksendzovsky, MD is a founder and Chief Science Officer of NewTouch Digital. Alex has embarked on a career in research and clinical neuroscience. Alex graduated from Emory University with a B.S. Neuroscience and Philosophy where he worked in several research laboratories focused on Parkinson’s disease. Alex graduated with an M.D. with distinction in research from The Chicago Medical School where he focused his research and clinical efforts on brain tumor immunology. He is currently a senior Resident Physician in the Department of Neurosurgery at the University of Virginia and Surgical Neurology Branch at the National Institutes of Health (NIH). He is pursuing an enfolded Ph.D. in molecular physiology and biological physics where he is focused on molecular and physiological mechanisms of epilepsy. Alex has published in central nervous system oncology, epilepsy, functional neurosurgery and pediatrics. He will serve as the medical and scientific expert focusing on product specification and clinical trials.`
        },
        {
          name: 'Jonathan Pomeraniec, MD',
          position: 'Co-Founder & Chief Medical Officer',
          link: 'https://www.linkedin.com/in/jonathan-pomeraniec-785a294/',
          image: require('../assets/people/jonathan.jpg'),
          info: `Jonathan Pomeraniec, MD/MBA is a founder and Chief Medical Officer of NewTouch Digital. Jonathan has deep roots in both business and medicine. After completing undergraduate work at the Wharton School at the University of Pennsylvania, he worked as an analyst at Lehman Brothers and Barclays Capital. Jonathan transitioned to medicine by completing a postbaccalaureate degree at Columbia University and subsequently pursued an enfolded MD/MBA degree at the University of Virginia (UVA) School of Medicine and Darden School of Business. Jon was the president of the medical school and a Darden Foundation Scholar.  Jonathan is currently a resident in the joint UVA/National Institutes of Health (NIH) Neurosurgery residency program. Jonathan has conducted original research in functional neuroimaging and continues research in functional, pediatric and innovations of neurosurgery. He will serve as medical and business expert, specifically focusing on concept and product design along with patient care and clinical trials and rollout.  
`
        }/*,
        {
          name: 'Chris Cabral',
          position: 'Co-Founder & Chief Technology Officer',
          image: require('../assets/people/chris.jpg'),
          info: `Chris Cabral is a founder and Chief Technology Officer of NewTouch Digital. Chris has spent the last 10 years in the technology industry focusing on Web Development, Cyber Security and Automated Systems Management. As a senior technologist, consulting for several Federal agencies, Chris built out continuous deployment solutions for the Consumer Financial Protection Bureau and Continuous Monitoring Solutions for the assets inside the Department of Defense. Chris is an avid open source contributor whose accomplishments range from cross platform drawing tools in iOS and android to an open source training guides for ansible. He also personally maintains several ansible playbooks that are frequently used by the Consumer Finance Protection Bureau today to maintain their critical infrastructure. Chris graduated in 2007 from the Massachusetts Institute of Technology with a B.S. in Nuclear Science and Engineering. During that time he contributed to a the Journal of Biomedical Optics performing research and analysis on diffusion magnetic resonance imaging of mouse tongues. `
        }  */
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
    min-height: 50%;
    margin: 10% 10%;
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
  cursor: pointer;
  z-index: 10;

}
#main-wrapper img:hover + .info {
    display: block;
}
.active{
  background-color: rgba(230,230,230,0.6);
  color:black;
  padding: 10px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); 
}
#info{
  text-align: left;
  padding: 5px;
}
</style>