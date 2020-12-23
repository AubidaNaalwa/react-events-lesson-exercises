import React, { Component } from 'react';

class SpotCheck1 extends Component {
    //add another method called logHover, 
    //which prints "I was hovered!" when the *mouse enters* the button
    logClick() {
        console.log("I was clicked!")
    }

    hover(){
        console.log("I was Hovered!")
    }
    render() {
        return (
            <button id="logger" onClick={this.logClick} onMouseOver={this.hover}>Click me</button>
        );
    }
}

export default SpotCheck1;
