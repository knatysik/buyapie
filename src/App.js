import React from 'react';
import greetingImage from './images/greeting.gif'
import Input from './components/input/Input.js'

import Test from './components/test/Test.js'

function App() {
    return (
        <div className="wrap">
            <div className="logotype">
                <img src={greetingImage} alt="greeting" />
            </div>
            <h1>Make a shopping list now!</h1>
            <Input />
        </div>
    )

}

export default App