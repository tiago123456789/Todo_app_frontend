import React, { Component } from "react";
import Button from "./../template/Button";

export default class Lista extends Component {

    montarListagemTarefa() {
        if (this.props.tarefas.length > 0) {
            return this.props.tarefas.map((tarefa, indice) => (
                <div className="task" key={indice}>
                    <p>{tarefa.description}</p>
                    <div className="btn_action_task">
                        <Button btnStyle="success" nome="Check"/>
                        <Button btnStyle="add" nome="Edit"/>
                        <Button btnStyle="danger" nome="Delete"/>
                    </div>
                </div>
            ));
        }
    }

    render() {
        return (
            <section className="list_tasks">
                { this.props.tarefas.length > 0 && <h2>Lista de Tarefas</h2> }
                { this.montarListagemTarefa() }
            </section>
        )
    }
}