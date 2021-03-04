import React, { Component } from 'react';
import Main from './component/main'
import './App.css';
import { Layout,Header,Drawer,Navigation,Content } from 'react-mdl';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import { render } from '@testing-library/react';


function App(){
  
  function HeaderView() {
    const location = useLocation();
    // console.log(location.pathname);
    return location.pathname
  }
  
    
   
  return (
     
    <div>
    <div >
    <Layout fixedHeader className='body' >
        <Header className='nav' style={{height:'75px',backgroundColor:'#111',textAlign:'center'}}title={<span><strong style={{fontSize:'35px' ,textAlign:'center',color:'#f2f2f2'}}>
        <span>
        <img src={require('./images/plus.png')} />
        </span>SM Hospital</strong></span>}>
            <Navigation >
              
                
                {(() => {
                  
              
                if (HeaderView()=='/Appointment/' || HeaderView()=='/Read') {
                  return (
                    <div className='container'>
                    <div className="row">
                    <div style={{marginRight:'50px',marginLeft:'20px',marginTop:'15px'}}>
                    <Link to="/Read" style={{height:'20px'}}><strong style={{fontSize:'15px' ,color:'#ffff'}}>Answer Query</strong></Link>

                    </div>
                    <div>
                <button><Link to="/" style={{height:'20px',color:'#ffff'}}><strong style={{fontSize:'15px'}}>Logout</strong></Link></button>
                    </div>
                    
                    </div>
                    </div>
                  )
                  
                } else {
                  return (
                    <div>
                    
                    <Link to="/" style={{height:'20px'}}><strong style={{fontSize:'15px' ,color:'#ffff'}}>Home</strong></Link>
                    <Link to="/contact" style={{height:'20px', marginLeft:'20px',color:'#ffff'}}><strong style={{fontSize:'15px'}}>Appointment</strong></Link>
                    <Link to="/Login" style={{height:'20px', marginLeft:'20px',color:'#ffff'}}><strong style={{fontSize:'15px'}}>Login For Doctors</strong></Link>
                    <Link to="/services" style={{height:'20px', marginLeft:'20px',color:'#ffff'}}><strong style={{fontSize:'15px'}}>Services</strong></Link>
                   
                    </div>
                  )
                }

               



              })()}
                
            </Navigation>
        </Header>
        <Drawer title={<span><strong style={{fontSize:'30px' ,textAlign:'center'}}>SM Hospital</strong></span>}>
        <img style={{height:'60px',width:'60px',marginLeft:'90px'}} src={require('./images/sign.png')} />
        <hr>

        </hr>
        
        <p style={{textAlign:'center'}}>We Care About Your Health</p>
        <hr></hr>

            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/services">Services</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main></Main>
        </Content>
        
    </Layout>
    
    
    </div>
    
   </div>
  );
  }


export default App;
