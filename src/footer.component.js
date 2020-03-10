import React, { Component } from 'react';

const text = "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC,it over 2000 years old. Richard McClintock, a Latin professor "


class Footer extends Component {
    render() {
        return <div>
            <hr></hr>
            <p>
                {text}
            </p>
        </div>
    }
}

export default Footer 