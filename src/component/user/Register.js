import React, { Component } from "react";
import Button from "./../template/Button";

export default class Register extends Component {

    render() {
        return (
            <div id="form_register_user">
                <h1>Novo Usuario</h1>
                <form id="new_user">

                    <label htmlFor="nome">Nome:</label><br/>
                    <input type="text" id="nome" placeholder="Nome"/><br/>

                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" placeholder="Email"/><br/>

                    <label htmlFor="senha">Senha:</label><br/>
                    <input type="password" placeholder="Senha"/><br/>

                    <Button isBtnForm={true} nome="Registrar-se" btnStyle="add"/>
                </form>
            </div>
        )
    }
}