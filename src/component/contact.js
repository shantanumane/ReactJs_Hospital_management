import React,{Component} from 'react'
import firebase from '../fire'
import Foot from './Foot'
import './color.css'
import {Grid} from 'react-mdl'
require("nodemailer/lib/smtp-connection");
const nodemailer=require('firebase/auth')
class Contact extends Component{
  
  // setUpRecaptcha=()=>{
  //   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
  //     'size': 'invisible',
  //     'callback': function(response) {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //      this.Submit();
  //     }
  //   });

  // }
  
  

    state={
      fname:"",
      email:"",
      contact:'',
      age:"",
      gender:"",
      Appointdate:"",
      Description: "",
      curTime : new Date().toLocaleString(),
      verify:''
      
    };
    
    
    Submit=e=>{
      
        console.log(this.state.verify);
      e.preventDefault();
      firebase.database().ref("appoinment").push({
        name:this.state.name,
        email:this.state.email,
        contact:this.state.contact,
        age:this.state.age,
        gender:this.state.gender,
        Appointdate:this.state.Appointdate,
        Description:this.state.Description,
        date:this.state.curTime
     });
    alert(" Data saved successfully");
    window.location.reload(false);
    
    };
    // second=d=>{
    //   d.preventDefault();
    //   this.setUpRecaptcha();
    //   // window.alert("Appointment Done Successfully at time "+this.state.curTime+" ! Go to the home page");
    //   var phoneNumber = this.state.contact;
      
    //   var appVerifier = window.recaptchaVerifier;
    //   firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    //       .then(function (confirmationResult) {
    //         // SMS sent. Prompt user to type the code from the message, then sign the
    //         // user in with confirmationResult.confirm(code).

    //         window.confirmationResult = confirmationResult;
    //         var code = window.prompt("enter OTP")
    //         confirmationResult.confirm(code).then(function (result) {
    //           // User signed in successfully    
    //           this.setState({verify:'done'});
    //           alert("OTP is verified!!!");
    //        // ...
    //         }).catch(function (error) {
    //           // User couldn't sign in (bad verification code?)
             
    //           // ...
    //           console.log(error);
    //           alert("OTP verification failed");
    //         });
    //       }).catch(function (error) {
    //         // Error; SMS not sent
    //         // ...
    //         alert("cann't send OTP use another Contact number")
    //       });  
    // }
      
    render(){
        return(
          
            <div>
            <div>
            <div className='wrapper' style={{height:'800px'}}>
        <div className='form-wrapper' style={{width:'500px'}}>
        
          <h2 ><strong>Appointment</strong></h2>
          <br></br>
          <form onSubmit={(e)=> this.Submit(e)}>
          <div id='recaptcha-container'></div>
          
            <div className='fullName'>
              <label htmlFor="fullName">Patient Full Name</label>
              <input type='text' name='fullName'  id='fname' onChange={e=>this.setState({name:e.target.value})} required/>
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' id='email'onChange={e=>this.setState({email:e.target.value})} required/>
            </div>
            
            {/* <div>
            <cell col={6}>
            <div className='password'>
              
               </div>
            </cell>
            <cell col={6}>
            <div className='password' > 
            
            </div>
            </cell>
            </div> */}
            <div className='email'>
              <label htmlFor="email">Contact Number</label>
              <input type='text' name='contact' id='email'onChange={e=>this.setState({contact:e.target.value})} required/>
        
            </div>
            <Grid className="demi-grid-1">
            <cell col={6}>
            <div className='password'>
              <label htmlFor="password">Age</label>
              <input type='text' name='Age' id='age' onChange={e=>this.setState({age:e.target.value})}  style={{marginRight:'84px',marginLeft:'0px',width:"100px"}} required />
            </div>
            </cell>
            <cell col={6}>
            <div className='password' > 
            <label htmlFor="password" id='gender'onChange={e=>this.setState({gender:e.target.value})} required>Gender</label>
         
            <input type='text' name='gender'id='gender' onChange={e=>this.setState({gender:e.target.value})}  style={{marginTop:'0px',height:'43px',width:'100px',marginLeft:'0px'}} required/>
          
            </div>
            </cell>
            <div className='email'>
              <label htmlFor="email">Select date for Appointment</label>
              <input type="date" name="date" onChange={e=>this.setState({Appointdate:e.target.value})} required/>
            </div>
            <div className='email'>
              <label htmlFor="email">Description About disease</label>
              <textarea type='text' name='Description'  id='textarea' style={{height:'50px'}} onChange={e=>this.setState({Description:e.target.value})} required/>
            </div>
            </Grid>


            
            <div className='info'>
              <small>Please check all information before submit</small>
            </div>
            <div className='submit'>
          
              <button type="submit">Go for payment</button>
            </div>
          </form>
        </div>
      </div>
            </div>
        
            <Foot></Foot>







            </div>
        )

    }
}

export default Contact;