import React, {Component} from 'react';
import MessageToastr from "react-redux-toastr";
import Routes from "./Routes";
import "../sistema.css";


class App extends Component {
    render() {
        return (
            <div>
                <Routes />
                <MessageToastr/>
            </div>
        );
    }
}

export default App;
