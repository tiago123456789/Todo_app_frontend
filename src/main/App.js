import React, {Component} from 'react';
import Routes from "./Routes";
import Message from "./../component/template/Message";

class App extends Component {
    render() {
        return (
            <div>
                <Routes />
                <Message />
            </div>
        );
    }
}

export default App;
