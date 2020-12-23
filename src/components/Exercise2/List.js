import React, { Component } from 'react';
import Contact from './Contact'

class List extends Component {
  //should recieve the prop "contact"
  render() {
    return (
      <div >
        {/* Should render an array of Contact components , with the prop "name"*/}
        {this.props.contacts.map(v => <Contact contact = {v} key ={v} displayConv ={this.props.displayConv}/>)}
      </div>
    );
  }
}

export default List;
