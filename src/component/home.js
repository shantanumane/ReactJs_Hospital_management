import React,{Component} from 'react'
import {Grid,Cell} from 'react-mdl'
import '../App.css';
import Foot from './Foot'
class Home extends Component{
    render(){
        return(
            <div>

                {/* font image start */}
               <Grid className="demo-grid-1">
                    <Cell col={12} className='back'>
                    <div style={{
                        marginTop:'150px',
                        marginLeft:'50px'
                        }}>
                    <strong >
                    <p className='heading'>
                    Medical Services
                    <br></br></p><br></br><br></br>
                    <p className='heading'>
                    You Can Trust
                    </p>
                    <p style={{color:'#ECE9E6',fontSize:'20px'}}><br></br><br></br>
                    The hospital that feeds you with<br></br> 
                    white bread butter of health ,<br></br>  boostup your power  
                    and frozen down<br></br>  the denger to your life!<br></br> We Care About Your Health !!!!
                    </p>
                    </strong>
                    </div>
                    </Cell>                  
                </Grid>
                {/* font image start */}
                {/* <div className='cardback' style={{height:'300px'}}>
                <Grid className="demi-grid-1">
                        <cell col={3}>
                        <Card shadow={0} style={{width: '320px', height: '250px',marginLeft:'25px'}}className='card'>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenan convallis.
                            </CardText>
                            <CardActions border>
                                <Button colored>View Updates</Button>
                            </CardActions>
                        </Card>
                        </cell>
                        <cell col={4}>
                        <Card shadow={0} style={{width: '320px', height: '250px'}} className='card'>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenan convallis.
                            </CardText>
                            <CardActions border>
                                <Button colored>View Updates</Button>
                            </CardActions>
                        </Card>

                        </cell>
                        <cell col={4}>
                        <Card shadow={0} style={{width: '320px', height: '250px',marginRight:'0px'}} className='card'>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenan convallis.
                            </CardText>
                            <CardActions border>
                                <Button colored>View Updates</Button>
                            </CardActions>
                        </Card>

                        </cell>

                </Grid>
                </div> */}
                <Grid className="demi-grid-1">
                    <cell col={6}> 
                    <img src={require('../images/1.png')} />
                    </cell>
                    <cell col={6}>
                    <div style={{marginLeft:'50px',marginTop:'50px'}}>
                        <span>
                            <strong >
                            <p style={{
                                fontSize:'50px',
                                fontFamily:'Aerial'
                                }}>Our Patients Are at the Centre <br></br><br></br><br></br>
                                 of Everything We Do</p>
                            </strong>
                        </span>
                        <br></br><br></br><br></br>
                        <div style={{marginLeft:'40px'}}>
                            <p style={{fontSize:'20px'}}>
                            Kind lesser bring said midst they're created signs<br></br>
                             made the beginni years created Beast upon whales <br></br>
                             herb seas evening she'd day green dominion evening<br></br>
                              in moved have fifth in won't in darkness fruitful<br></br>
                               god behold whos without bring created creature.<br></br>
                            </p>
                        </div>
                        <br></br>
                        <Grid className="demi-grid-1">
                        <div style={{marginLeft:'30px'}}><cell col={6}><p style={{fontSize:'20px'}}><span><img src={require('../images/tech.png')}></img></span>Modern Technology</p></cell></div>
                        <div style={{marginLeft:'200px'}}><cell col={6}><p style={{fontSize:'20px'}}><span><img src={require('../images/fac.png')}></img></span>Worldclass Facilities</p></cell></div>
                        </Grid>
                        <br></br>
                        <Grid className="demi-grid-1">
                        <div style={{marginLeft:'30px'}}><cell col={6}><p style={{fontSize:'20px'}}><span><img src={require('../images/people.png')}></img></span>Experienced Nurse</p></cell></div>
                        <div style={{marginLeft:'200px'}}><cell col={6}><p style={{fontSize:'20px'}}><span><img src={require('../images/square.png')}></img></span>24 Hours Support</p></cell></div>
                        </Grid>

                    </div>
                    </cell>
                </Grid>

                <br></br><br></br>
                <Grid className="demi-grid-1">
                    <cell col={6}>
                    <div style={{marginLeft:'80px',marginTop:'50px'}}>
                        <span>
                            <strong >
                            <p style={{
                                fontSize:'50px',
                                fontFamily:'Aerial'
                                }}>We Analyse Your Health States  <br></br><br></br><br></br>
                                 In Order To Top Service</p>
                            </strong>
                        </span>
                        <br></br><br></br><br></br>
                        <div style={{marginLeft:'40px'}}>
                            <p style={{fontSize:'20px'}}>
                            Kind lesser bring said midst they're created <br></br>
                            signs made the beginni years created Beast upon<br></br>
                             whales herb seas evening she'd day green dominion <br></br>
                             evening in moved have fifth in won't in darkness<br></br>
                              fruitful god behold whos without bring created creature<br></br>
                            </p>
                        </div>
                        <br></br>
                    </div>
                    </cell>
                    <cell col={6}> 
                    <img src={require('../images/2.png')} />
                    </cell>
                </Grid>
                {/* footer start */}
                <Foot></Foot>
            </div>
        )

    }
}

export default Home;