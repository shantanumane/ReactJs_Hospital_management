import React,{Component} from "react"
import Foot from './Foot'
import axios from "axios";
import {Button} from 'reactstrap'

const Query=props=>(
    <tr>
        <td>{props.query.question}</td>
        <td><Button>Answer</Button></td>
    </tr>
)


class Read extends Component{
    constructor(props){
        super(props);
        this.state={query :[]};
    }
    componentDidMount(){
        axios.get('http://localhost:7777/query')
        .then(respones=>{
            this.setState({query:respones.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }

    queryList(){
        return(this.state.query.map(function(currentQuery,i){
            return <Query query={currentQuery} key={i}/>;

        }));
    }

    render(){
    return(
        <div>
        <br></br>
            <h1 style={{textAlign:'center'}}>All Queries</h1>
            <table className="table table-striped" style={{marginTop:'30px'}}>
            <thead>
                <tr>
                    <th>Query</th>
                    <th>Answer</th>
                </tr>
            </thead>
            <tbody>
                {this.queryList()}
            </tbody>

            </table>
            <Foot></Foot>
        </div>
    )}
}
export default Read;