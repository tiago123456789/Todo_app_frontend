import React, { Component } from "react";
import Button from "./../template/Button";

export default class Lista extends Component {

    render() {
        return (
            <section className="list_tasks">
                <h2>Lista de Tarefas</h2>

                <div className="task">
                    <p>Fazer tarefa de matemática.</p>
                    <div className="btn_action_task">
                        <Button btnStyle="success" nome="Check"/>
                        <Button btnStyle="add" nome="Edit"/>
                        <Button btnStyle="danger" nome="Delete"/>
                    </div>
                </div>
            </section>
        )
    }
}