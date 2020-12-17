import React, { Component } from 'react';
import greetingImage from './images/greeting.gif'

class App extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="logotype">
                    <img src={greetingImage} alt="greeting"/>
                </div>
                <h1>Let's do React!</h1>
                <h2>End have a nice day!</h2>
            </div>
        );
    }
}

export default App;