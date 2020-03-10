import React, { Component } from 'react';



class Footer extends Component {
    render() {
        return <div>
            <hr></hr>
            <p>
                {this.props.text}
            </p>
        </div>
    }
}

export default Footer 