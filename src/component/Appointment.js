import React,{Component} from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import firebase from '../fire'
import '../App.css'
import Foot from './Foot'


class Appointment extends Component{    

    state={
        data:[]
    }
    // componentDidMount(){
    //     firebase.database().ref("appoinment").once("value").then(snapShot=>{
    //         snapShot.forEach(item=>{
               
    //             this.state.data.push({id:item.key,
    //                                   name:item.val().name,
    //                                   age:item.val().age,
    //                                   gender:item.val().gender,
    //                                 Description:item.val().Description,
    //                                 date:item.val().Appointdate
    //                                 });
              
    //         })
    //     })
       
        
    // }
    componentDidMount() {
        firebase
          .database()
          .ref("appoinment")
          .once("value")
          .then((snapShot) => {
            let updatedData = [];
            snapShot.forEach((item) => {
              updatedData.push({
                id: item.key,
                name: item.val().name,
                age: item.val().age,
                gender: item.val().gender,
                Description: item.val().Description,
                date: item.val().Appointdate,
              });
            });
            this.setState({ data: updatedData });
          });
      }
      rowDelete(id){
        alert("button clicked");   
  }
   
   
       
    render(){
        return(
            <div className='cardback'>
            <div >
            <br></br>
            {console.log(this.state)}
          
                <br></br>
                <h2 style={{textAlign:'center',fontSize:'30px'}}>Today's Appointment</h2>
                <br></br>
                <br></br>
                <Table striped bordered hover variant="dark" style={{width:"1200px",margin:'auto'}}>
                        <thead>
                        <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>age</td>
                    <td>gender</td>
                    <td>Description</td>
                    <td>date</td>
                    <td>Status</td>
                        </tr>
                        </thead>
                        <tbody>
                          
                        {
                            
                            this.state.data.map((item)=>
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                                <td>{item.Description}</td>
                                <td>{item.date}</td>
                                <td><button onClick={()=>{

                                        let userRef = firebase
                                        .database()
                                        .ref("appoinment/"+item.id);
                                    userRef.remove();
                                    alert("appointment Inpected successfully !!!");
                                    window.location.reload(false);
                                    }}>Inspected</button>
                                    </td>
                                </tr>
                                
                            
                            )
                        }
                        </tbody>
                    </Table>
                    <br></br>
            <br></br>
            
            </div>
            <Foot></Foot>
            
            </div>
            
        )
    }
}
export default Appointment;