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

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    };



  render() {
    return (

     <div>
      <Card>
        <CardBody>
          <CardTitle>{this.props.clickedUsersData.username}</CardTitle>

        </CardBody>
        <img width="100%" src="http://www.tridanim.com/images/static.boredpanda.com/blog/wp-content/uploads/2015/09/happy-cat-smiling-4__880.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>Email: {this.props.clickedUsersData.email}</CardText>

           <h5>Current Status:</h5>
           <h6 style={styles}>{this.props.clickedUsersStatus}</h6>
          <br/>
        </CardBody>
      </Card>
    </div>
     
    );
  }
}