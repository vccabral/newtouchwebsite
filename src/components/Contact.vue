<template>
  <div id="contact">
    <div id="main-wrapper">
    <p>{{note}}</p>
       <form action="https://formspree.io/viddamao@gmail.com"
       method="POST">
 	<input type="text" placeholder="First Name" name="first">
 	<input type="text" placeholder="Last Name"name="last">
 	<input type="text" placeholder="Company Name" name="company">
 	<input type="text" placeholder="Email" name="email">
 	<textarea type="text" placeholder="Your Message" id="msg" name="msg">
	</textarea>
	<input  id="submit_btn" class="btn_submit" type="submit" value="Submit"> 
      </form>	
      <p>Email: info@newtouchdigital.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      note: `TO CONTACT US, PLEASE COMPLETE THE FORM BELOW`
    }
  }
}
</script>

<style scoped>
td{
  font-size:0.7em;
}
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
    margin: 10% 10%;
    padding:3%;
    text-align: left;
    font-size:1em;
    font-weight: bold;
    background-color: rgba(0,0,0,0.7);
    color:white;
}
#main-wrapper input,#msg{
    width:30%;
    line-height: 40px;
    font-family: AvenirNext-Medium,Helvetica Neue,Helvetica,sans-serif;
    font-size:1.2em;
    padding-left: 10px;
    display: inline-block;
    margin:2%;
}
#msg{
    width:65.5%;
    margin-right: 20%;
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

@media screen and (max-device-width: 600px) {

   #main-wrapper{
    min-height: 70%;
     margin: 25% auto;
   }
  p{
     font-size: 0.8em;
  }
  #main-wrapper input,#msg{
    width:35%;
    font-size:0.8em;
    padding-left: 10px;
    display: inline-block;
    margin:2%;
    }
    #msg{
    width:80%;
    margin-right: 20%;
    }
}
</style>