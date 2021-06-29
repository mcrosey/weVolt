import React, { Component } from 'react';
import '../../Message.css'

class SMS extends Component {

  state = {
    text: {
      recipient: '',
      textmessage: ''
    }
  }

  sendText = _ => {
    const { text } = this.state;
    fetch(`/sendtext?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err => console.error(err))
  }

  render() {
    const { text } = this.state;
    const spacer = {
      margin: 8
    }
    const textArea = {
      borderRadius: 4
    }
    return (
      
        <div className= 'card-message'
        style={{ 
          marginTop: 10, 
          margin:"30px auto",
          maxWidth:"500px",
          padding:"20px",
          textAlign:"center",
          backgroundColor:"white"
      }}
        >
          <h2> Contact </h2>
          <label> Enter Number </label>
          <br />
          <input value={text.recipient}
            onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
          <div style={spacer} />
          <label> Message </label>
          <br />
          <textarea rows={3} value={text.textmessage} style={textArea}
            onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
          <div style={spacer} />
          <button onClick={this.sendText}> Send Text </button>
        </div>
     
    );
  }
}

export default SMS;