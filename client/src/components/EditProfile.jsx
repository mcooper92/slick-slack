import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardImg, Button, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

import { Alert, FormGroup} from 'reactstrap';

import { Container, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label} from 'reactstrap';


var styles = {
  color:'green',
  fontWeight:'bold'
};

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    };



  render() {
    return (

     <div>
      <Card>
        <CardBody>
          <CardTitle>{this.props.userData.username}</CardTitle>

        </CardBody>
        <img width="100%" src="http://www.freegreatpicture.com/files/166/29787-apple-mac-os-x-lion-system-wallpaper.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>Email: {this.props.userData.email}</CardText>

           <h5>Current Status:</h5>
           <h6 style={styles}>{this.props.userStatus}</h6>
          <br/>
        </CardBody>
      </Card>
    </div>
     
    );
  }
}

