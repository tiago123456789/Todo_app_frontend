import React, {Component} from 'react';
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
            </div>
        );
    }
}

export default App;
