import React from 'react';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter, Form, Button, Label, Input, FormGroup} from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal
    });
  }
  
  render() {
    return (
    <Container className="py-4">
      <div>
        <Button color="danger" onClick={this.toggle}>Change Status</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Your Status</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="myinput">Enter a new status below!</Label>
                <Input name="something" id="myinput" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Update Status</Button>
          </ModalFooter>
        </Modal>
      </div>
    </Container>
    );
  }
}
export default ModalExample