import React, { Component } from 'react';
import MenuExtended from './menu.component'


class MenuButton extends Component {
    state = {
        isVisible: false
    }
    clickHandle = ( ) => {
        if (!this.state.isVisible) {
            this.setState({isVisible: true})
        } else {
            this.setState({isVisible: false})
        }
    }

    render(){
        return <div>
            <button onClick={this.clickHandle}>X</button>
            {this.state.isVisible ? <MenuExtended /> : null}
        </div>
    }
    
}

export default MenuButton