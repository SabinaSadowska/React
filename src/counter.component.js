import React, { Component } from 'react'

class Counter extends Component {
    state = {
        countState : 0
    }

    add = () => {
        this.setState((prevState)=>({countState: prevState.countState + 1}))
    }

    sub = () => {
        this.setState({countState: this.state.countState - 1})
    }

    reset = () => {
        this.setState({countState: 0})
    }
    
    render(){
        // const {countState} = this.state  -------------destrukturyzacja, zeby nie pisac this.state.countState (jesli duzo elementow go zawierajacych)
        return <div>
            <div>State: {this.state.countState}</div>
            <button onClick={this.add}>+</button>
            <button onClick={this.sub}>-</button>
            <button onClick={this.reset}>RESET</button>
        </div>
    }
}

export default Counter