import React, { Component } from 'react';
import '../../Message.css'
// const client = require('twilio')(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_AUTH_TOKEN
//   );



  class SMSForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          message: {
            to: '',
            body: ''
          },
          submitting: false,
          error: false
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

      onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
      }

      async fetchMessage(){
       const res = await fetch('https://api.twilio.com/2010-04-01/Accounts/ACaffb76c56918b16443c279305e84b466/Messages.json', {
          method: 'POST',
          body: JSON.stringify(this.state.message)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({
                error: false,
                submitting: false,
                message: {
                  To: '',
                  Body: ''
                }
              });
            } else {
              this.setState({
                error: true,
                submitting: false
              });
            }
          });

      }

    onSubmit(event) {
      event.preventDefault();
      this.setState({ submitting: true });
      
    }

      render() {
        return (
         
            <form
            onSubmit={this.onSubmit}
            className={this.state.error ? 'error sms-form' : 'sms-form'}
          >
            <div>
              <label htmlFor="to">To:</label>
              <input
                type="tel"
                name="to"
                id="to"
                value={this.state.message.To}
                onChange={this.onHandleChange}
              />
            </div>
            <div>
              <label htmlFor="body">Body:</label>
              <textarea
                name="body"
                id="body"
                value={this.state.message.Body}
                onChange={this.onHandleChange}
              />
            </div>
            <button type="submit" disabled={this.state.submitting}>
          Send message
        </button>
          </form>
        );
      }
}

export default SMSForm;
