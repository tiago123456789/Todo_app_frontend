import React, { Component } from "react";
import Button from "./../template/Button";

export default class FormAuth extends Component {

    render() {
        return (
            <div id="form_authentication_user">
                <h1>Autenticar Usuario</h1>
                <form id="new_user">

                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" placeholder="Email"/><br/>

                    <label htmlFor="senha">Senha:</label><br/>
                    <input type="password" placeholder="Senha"/><br/>

                    <Button isBtnForm={true} nome="Logar" btnStyle="add"/>
                </form>
            </div>
        )
    }
}