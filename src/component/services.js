import React, { Component } from "react";
import Foot from "./Foot";
import axios from 'axios'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import "./color.css";
class Services extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.handleQuery = this.handleQuery.bind(this);

    this.state = {
      isModalOpen: false,
      app_query:''
    };
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  handleQuery=(e)=> {
    e.preventDefault();
    this.toggleModal();
    alert(this.state.app_query)
    const table={question:this.state.app_query};
    axios.post('http://localhost:7777/query/add',table).then(res=>console.log(res.data));
    this.setState({
      app_query:''
  })
    
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row row-header">
            <div className="col-4"></div>
            <div className="col-12 ">
              <h1>Have any Query</h1>
              <p>
                If you hav eany query and misleading about any health
                conceptsyou can directly ask our expert doctors.
              </p>

              <Button outline onClick={this.toggleModal}>
                <span className="fa fa-sign-in fa-lg"></span> Click here to ask
                query
              </Button>
            </div>
            <div className="col-4"></div>
          </div>
        </div>

        <br></br>
        <br></br>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Query</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e)=>this.handleQuery(e)}>
              <div>
                <FormGroup>
                  <div>
                    <Label style={{ textAlign: "center" }}>Query</Label>
                  </div>
                  <div>
                    <textarea
                      type="text"
                      id="Query"
                      name="Query"
                      style={{ width: "400px" }}
                      onChange={e=>this.setState({app_query:e.target.value})}
                    />
                  </div>
                </FormGroup>
              </div>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>




        <Foot></Foot>
      </div>
    );
  }
}

export default Services;
