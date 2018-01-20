import React, {Component} from 'react';
import Header from "../component/template/Header";
import DivContainer from "../component/template/DivContainer";
import Tarefa from "../component/tarefa/Tarefa";
import Register from "../component/user/Register";
import FormAuth from "../component/user/FormAuth";
import "../sistema.css";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>

                <DivContainer>

                    <FormAuth/>
                    <Register />
                    <Tarefa/>

                </DivContainer>
            </div>
        );
    }
}

export default App;
