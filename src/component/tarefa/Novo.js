import React, { Component } from "react";
import Button from "./../template/Button";

export default class NovoTarefa extends Component {

    render() {
        return (
            <form id="new_task">
                <label htmlFor="descricao">Nova tarefa:</label>
                <br/>
                <input type="text" id="descricao" placeholder="Nova tarefa"/>
                <Button isBtnForm={true} nome="Adicionar" btnStyle="add"/>
            </form>
        )
    }
}