<template>
  <div id="contact">
    <div class="main-wrapper" v-show ="!successBox">
    <p>{{note}}</p>
       <form>
 	<input type="text" placeholder="First Name" v-model="firstName">
 	<input type="text" placeholder="Last Name"v-model="lastName">
 	<input type="text" placeholder="Company Name" v-model="companyName">
 	<input type="text" placeholder="Email" v-model="email">
 	<textarea type="text" placeholder="Your Message" rows="3" id="msg" v-model="msg"  
         v-bind:class="{red_outline:msg_length==150}"></textarea>
	<button  id="submit_btn" class="btn_submit" v-on:click="submit_form" >Submit</button> 
        <p id="msg_len" v-bind:class="{red:msg_length==150}">{{msg_length}}&nbsp;/&nbsp;150</p>
      </form>	
      <p>Email: info@newtouchdigital.com</p>
    </div>
      <div id="successBox" class="main-wrapper" v-show="successBox">
        <p>Your message has been successfully sent. </p><br>
        <p>We appreciate and thank you for your interest in NewTouch Digital.</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      note: `TO CONTACT US  PLEASE COMPLETE THE FORM BELOW`,
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      msg: '',
      successBox: true
    }
  },
  computed: {
    msg_length: function () {
      return this.msg.length
    }
  },
  watch: {
    msg: function () {
      if (this.msg_length > 150) {
        this.msg = this.msg.substr(0, 150)
      }
    }
  },
  methods: {
    submit_form: function () {
      // TODO: input null and sanity check
      let data = {
        'name': this.firstName + '  ' + this.lastName,
        'time': new Date(),
        'companyName': this.companyName,
        'email': this.email,
        'msg': this.msg
      }
      fetch('https://newtouchdemo.herokuapp.com/contactform', {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: JSON.stringify(data)
      }).then(res => {
        this.successBox = true
        // console.log('Request complete! response:', res)
      }).catch(function (err) {
        alert('Connection Error, please try again later')
        console.log('Fetch Error :-S', err)
      })
    }
  }
}
</script>

<style scoped>
.red{
  color:rgba(255, 20, 50, 0.8);
}
#contact{
    background: url(../assets/bg_contact.jpg) no-repeat;
    width:100%;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-size: cover;
    justify-content: center;
}
.main-wrapper{
    position: relative;
    width: 70%;
    margin: 8% 10%;
    padding:3%;
    text-align: left;
    font-size:1em;
    font-weight: bold;
    background-color: rgba(0,0,0,0.5);
    color:white;
}
.main-wrapper input,#msg, #submit_btn{
    width:35%;
    line-height: 40px;
    font-size:1em;
    padding-left: 10px;
    display: inline-block;
    margin:1.5%;
}
input:focus, #msg:focus {
  outline: solid 4px rgba(41,100,38,1);
}
#msg{
    font-family: inherit;
    width:75.5%;
    margin-right: 20%;
    overflow: hidden;
    line-height: 25px;
    font-size: 1.2em;
    padding: 5px;
}
.red_outline{
  outline: solid 4px rgba(255, 20, 50, 0.8)!important;
}
.btn_submit{
	width:180px!important;
	height:50px;
	display: block;
	margin-left: 2%;
	margin-top:20px;
	line-height:35px;
	text-align:center;
        background-color: rgba(41,100,38,1);
	color:#fff;
	font-size:16px;
	border: 0px;
	border-radius:2px;
	box-shadow: 0px 2px 2px rgba(33,33,33,0.4);
	cursor: pointer;
}
.btn_submit:hover{
	box-shadow: 0px 7px 5px rgba(33,33,33,0.5);
}
#msg_len{
  float: right;
  margin-right: 32%;
}
#successBox{
     padding-top: 50px;
     min-height: 50%;
     box-shadow: 0px 7px 5px rgba(33,33,33,0.5);
     z-index:15;
     font-size: 1.3em;
}
#successBox>p{
  margin-bottom: 0;
}
/*Moblie responsive*/
@media screen and (max-device-width: 600px) {
  .main-wrapper{
    min-height: 70%;
     margin: 25% auto;
   }
  p{
     font-size: 0.8em;
  }
 .main-wrapper input,#msg{
    width:35%;
    font-size:0.8em;
    padding-left: 10px;
    display: inline-block;
    margin:2%;
    outline: none!important;
    }
    #msg{
    width:80%;
    margin-right: 20%;
    }
    #msg_len{
      display: none;
    }
}
</style>