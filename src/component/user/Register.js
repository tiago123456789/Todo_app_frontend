import React, { Component } from "react";
import Button from "./../template/Button";
import axios from "axios";

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: ""
        };
        this.register = this.register.bind(this);
    }

    alteraValorState(chave, valor) {
        this.setState({ [chave]: valor });
    }

    register(event) {
        event.preventDefault();
        console.log("passed on here");
        axios.post("http://localhost:3000/users", this.state)
            .then(response => console.log(response))
            .catch(responseError => console.log(responseError));
    }

    render() {
        return (
            <div id="form_register_user">
                <h1>Novo Usuario</h1>
                <form id="new_user" onSubmit={this.register}>

                    <label htmlFor="nome">Nome:</label><br/>
                    <input type="text" id="nome" value={this.state.nome}
                           onChange={(event) => this.alteraValorState("nome", event.target.value)}
                           placeholder="Nome"/><br/>

                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" value={this.state.email}
                           onChange={(event) => this.alteraValorState("email", event.target.value)}
                           placeholder="Email"/><br/>

                    <label htmlFor="senha">Senha:</label><br/>
                    <input type="password" value={this.state.senha}
                           onChange={(event) => this.alteraValorState("senha", event.target.value)}
                           placeholder="Senha"/><br/>

                    <Button isBtnForm={true}
                            nome="Registrar-se" btnStyle="add" />
                </form>
            </div>
        )
    }
}