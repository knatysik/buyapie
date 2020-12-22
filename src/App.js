import React from 'react';
import greetingImage from './images/greeting.gif'
import Form from './components/form/Form.js'

function App() {
    return (
        <div className="wrap">
            <div className="logotype">
                <img src={greetingImage} alt="greeting" />
            </div>
            <h1>Make a shopping list!</h1>
            <Form />
        </div>
    )
}

export default App