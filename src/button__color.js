import React, { Component } from 'react';
import './style.css'

class ButtonColor extends Component {
    state = {
        classBlue: true
    }

    changeColor = () => {
        this.setState({classBlue: !this.state.classBlue})
    }

    render() {
        return <button className={this.state.classBlue ? "blue" : "red"} onClick = {this.changeColor}>
            Click me
        </button>
    }
}

export default ButtonColor