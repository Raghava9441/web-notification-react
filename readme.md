# WebNotification Component

The `WebNotification` component is a React functional component that allows you to display web notifications with customizable options.

## Installation

To use the `WebNotification` component, you can include it in your project files directly or install it as a package if you plan to distribute it. For direct use, ensure you have React and ReactDOM installed in your project.

## Usage

### Import the Component

First, import the `WebNotification` component in your React file:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { WebNotification } from './path/to/WebNotification';

const App = () => {
    const handleNotificationClick = () => {
        alert('Notification clicked!');
    };

    return (
        <div>
            <h1>Testing WebNotification Component</h1>
            <WebNotification
                title='Falkon SMS'
                icon='path/to/icon.png'
                body='This is the body of the notification'
                timeout={10000}
                ignore={false}
                onClickFn={handleNotificationClick}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));

```


| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | Yes | | The title of the notification. |
| `icon` | string | No | | URL of an icon to be displayed in the notification. |
| `body` | string | No | | The body text of the notification. |
| `timeout` | number | No | 5000 | Duration (in milliseconds) before the notification automatically closes. |
| `ignore` | boolean | Yes | | If `true`, the notification will not be shown. |
| `onClickFn` | function | No | | Function to be called when the notification is clicked. |