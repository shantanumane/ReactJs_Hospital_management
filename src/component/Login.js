import React,{Component} from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Card} from 'react-bootstrap'
import '../App.css'
import Foot from './Foot'
import firebase from '../fire'
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './color.css'
const data=[];
toast.configure();
class Login extends Component{
    data=[];
    state={
        Username:'',
        Password:'',
        isLogin:false
        }
   
         
    componentDidMount(){
     
        firebase
        .database()
        .ref("Username")
        .once("value")
        .then((snapShot)=>{
            
            // this.state.Username=snapShot.val()
            data.push({
                Username:snapShot.val()
            });
            
            });
            firebase
        .database()
        .ref("Password")
        .once("value")
        .then((snapShot)=>{
           
            // this.state.Password=snapShot.val()
            data.push({
                Username:snapShot.val()
            });
            
            });
            
          
    }
    
    Submit=e=>{
       
        console.log(String(this.state.Password));
        console.log(data[1].Username);
        
               
                if(String(this.state.Username)==String(data[0].Username) && String(this.state.Password)==String(data[1].Username))
                {
                   
                    alert("Login Successfull");
                    // const notify = () =>{
                    //      this.toast("Wow so easy !");
                    // }
                    // notify();
                   this.setState({
                        isLogin:true
                    })
                    
                    this.props.history.push('/Appointment/');
                    
                }
                else{
                    alert("Login Failed");  
                }
           
    }




    

    render(){
        return(
<div>
            <div>
            <div className='wrapper' style={{height:'500px'}}>
        <div className='form-wrapper' style={{width:'500px'}}>
          <h2 ><strong>Doctor Login</strong></h2>
          
          {console.log(this.state)}
          <br></br>
          <ToastContainer />
          <form onSubmit={(e)=> this.Submit(e)}>
          
                        <div className='email'>
                        <label htmlFor="email">Username</label>
                        <input type='Username' name='Username' id='Username' onChange={e=>this.setState({Username:e.target.value})} required/>
                        </div>
                        <div className='email'>
                        <label htmlFor="email">Password</label>
                        <input type='password' name='Password' id='Password' onChange={e=>this.setState({Password:e.target.value})} required/>
                        </div>
                        <div className='info'>
                        <small>Please check all information before submit</small>
                        </div>
                        <div className='submit'>
                    
                        <button type="submit">Submit</button>
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
export default Login;