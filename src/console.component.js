import React, { Component } from 'react';

class Console extends Component {
    clickConsole = () => {
        console.log('Hello World')
    };
    render(){
        
        return <div>
            <button onClick={this.clickConsole}>CONSOLE</button>
        </div>
    
        }
       
    }

export default Console