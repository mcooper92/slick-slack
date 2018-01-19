import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardImg, Button, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

import { Alert, FormGroup} from 'reactstrap';

import { Container, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label} from 'reactstrap';

import ModalExample from './ModalExample.jsx'

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    };
  
  handleOnChange(event) {
    // this.setState({
    //   [event.target.status]: event.target.value,
    // });
    console.log('Status changed!')
  }

  // handleKeyPress(event) {
  //   return event.key === 'Enter' ? this.logIn() : undefined;
  // }


  render() {
    return (

     <div>
      <Card>
        <CardBody>
          <CardTitle>{this.props.userData.username}</CardTitle>
          <CardSubtitle>{this.props.userData.status}</CardSubtitle> 

        </CardBody>
        <img width="100%" src="https://pixel.nymag.com/imgs/daily/selectall/2017/07/20/20-facebook-anonymity.w710.h473.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>Email: {this.props.userData.email}</CardText>

           <Input 
                type="text"
                placeholder="What's your status?"
                onChange={e => this.handleOnChange(e)}
                onKeyPress={e => this.handleKeyPress(e)}
                />
          <br/>
        </CardBody>
      </Card>
    </div>
     
    );
  }
}

