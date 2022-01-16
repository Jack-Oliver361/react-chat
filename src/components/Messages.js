import { Component } from "react";
import React from "react";

class Messages extends Component {
  renderMessage(message, index) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
      console.log(index)
    return (
      <li key={index} className={className}>
        <span
          className="avatar"
          style={{backgroundColor: member.color}}
        />
        <div className="Message-content">
          <div className="username">{member.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
  render() {
    const { messages } = this.props;
    console.log(this.props)
    return (
      <ul className="Messages-list">
        {messages.map((m, index) => this.renderMessage(m, index))}
      </ul>
    );
  }
}

export default Messages;
