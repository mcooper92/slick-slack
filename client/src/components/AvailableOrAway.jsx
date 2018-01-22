import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class AvailableOrAway extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,

    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    return (
      <Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
      <DropdownToggle caret>
        {this.props.userStatus}
      </DropdownToggle>
  <DropdownMenu>
    <DropdownItem onClick={this.props.changeStatus}>Available</DropdownItem>
    <DropdownItem onClick={this.props.changeStatus}>Will Return Soon</DropdownItem>
    <DropdownItem onClick={this.props.changeStatus}>Restroom Break</DropdownItem>
    <DropdownItem onClick={this.props.changeStatus}>On Vacation</DropdownItem>
    <DropdownItem onClick={this.props.changeStatus}>I'll be back soon!</DropdownItem>
    <DropdownItem onClick={this.props.changeStatus}>Leaving Soon</DropdownItem>
    <DropdownItem onClick={this.props.changeStatus}>Away</DropdownItem>
    <DropdownItem onChange={this.props.changeStatus}><input type='text' /></DropdownItem>
  </DropdownMenu>
</Dropdown>
    );
  }
}
