import React, { Component } from 'react';

class Contact extends Component {
  displayConv = ()=>{
    this.props.displayConv(this.props.contact)
  }
  
  render() {
  return (
      <div >
        <div onClick ={this.displayConv} >
          {this.props.contact}
        </div>
        {/* Should also reieve the displayConvo prop, and call the function onClick */}
      </div>
    );
  }
}

export default Contact;
