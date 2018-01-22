import React from 'react';
import { Container, ListGroup } from 'reactstrap';
import MessageEntry from './MessageEntry.jsx';

// container for message components
export default ({ messages, currentWorkSpaceId, getClickedUsersData }) => (
  <div className="message-list-container">
    <Container>
      {messages.map((message, index) => <MessageEntry message={message} key={message.id} lastmessage={messages[index - 1]} getClickedUsersData={getClickedUsersData}/>)}
    </Container>
  </div>
);
