import React from 'react'
import {Grid} from 'react-mdl'
const Foot=()=>{
    return(
        <div>
            <div style={{height:'300px',backgroundColor:'#404040'}}>
            <div style={{height:'15px',backgroundColor:'#111'}}>
            </div>
            <Grid className="demo-grid-1">
            <cell col={4}>
                <div style={{marginLeft:'10px'}}>
                <Grid className="demo-grid-1">
                    <cell col={6}><img src={require('../images/hospital.png')} style={{marginLeft:'120px',marginTop:'10px'}}/></cell>
                    <cell col={6}><h2 style={{textAlign:'start',color:'#ffffff',marginLeft:'40px',marginTop:'30px'}}>SM Hospital</h2></cell>
                </Grid>
                
                    
                </div>
        
                <div style={{marginLeft:'130px'}}>
                    <p style={{textAlign:'start',color:'#ffffff',fontSize:'20px',marginLeft:'10px'}}>Address : 120,SM hospital building ,
                    <br></br><span style={{marginLeft:'90px'}}>near old solapur ,Dhulewali,</span><br></br>
                    <span style={{marginLeft:'90px'}}>District:solapur,Maharashtra .</span>
                    </p>
                    <p style={{textAlign:'start',color:'#ffffff',fontSize:'20px',marginLeft:'10px'}}>Pin Code : 413304 .
                    <br></br>
                    </p>
                </div>
            </cell>
            <cell col={4}>
            <img src={require('../images/logoh.png')} style={{marginLeft:'180px',marginTop:'50px'}}/>
            </cell>
            <cell col={4}>
            <div style={{marginLeft:'10px'}}>
                <Grid className="demo-grid-1">
                    <cell col={6}><img src={require('../images/am.png')} style={{marginLeft:'120px',marginTop:'10px'}}/></cell>
                    <cell col={6}><h3 style={{textAlign:'start',color:'#ffffff',marginLeft:'40px',marginTop:'30px'}}>Emergency Service</h3></cell>
                </Grid>
                
                    
                </div>
        
                <div style={{marginLeft:'130px'}}>
                    <p style={{textAlign:'start',color:'#ffffff',fontSize:'20px',marginLeft:'10px'}}>Service : We are available 24 by 7 for you.
                    <br></br><span style={{marginLeft:'90px'}}>Just call us for Emergency service</span><br></br>
                    <span style={{marginLeft:'90px'}}>We provide fastest Services</span>
                    </p>
                    <p style={{textAlign:'start',color:'#ffffff',fontSize:'20px',marginLeft:'10px'}}>Contact No: 9604773149 .
                    <br></br>
                    </p>
                </div>



            </cell>
            </Grid>

            </div>
            <div style={{height:'60px',backgroundColor:'#111'}}>
                    <p style={{textAlign:'center',color:'#ECE9E6',fontSize:'20px',paddingTop:'14px'}}>Copyright 2020 || Powered by React-Js ||  SM Hospital</p>    
            </div>
        </div>
    )
}
export default Foot;