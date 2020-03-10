import React from 'react';

function AlertInfo() {
    const clickAlert = () => {
        alert("hello world")
    }
    return <div>
        <button onClick={clickAlert}>ALERT</button>
    </div>
}

export default AlertInfo