import React, {Component} from 'react';
import MessageToastr from "react-redux-toastr";
import Header from "../component/template/Header";
import DivContainer from "../component/template/DivContainer";
import Routes from "./Routes";
import "../sistema.css";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <DivContainer>
                    <Routes />
                </DivContainer>
                <MessageToastr/>
            </div>
        );
    }
}

export default App;
