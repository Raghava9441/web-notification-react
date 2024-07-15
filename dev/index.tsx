import React from 'react';
import ReactDOM from 'react-dom';
import { WebNotification } from '../src';

const App = () => {
    const clickFunction = () => {
        alert("hehe")
    }

    return <div>
        <h1>Testing Notification Component</h1>
        <WebNotification title='Falkon SMS' body='Message Body' onClickFn={clickFunction} ignore={false}/>
    </div>
}

ReactDOM.render(<App />, document.getElementById('app'));