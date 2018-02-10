import React, { Component } from "react";
import Button from "./../template/Button";
import { deletar, marcarTarefaConcluida } from "./TarefaActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Lista extends Component {

    montarListagemTarefa() {
        if (this.props.tarefas.length > 0) {
            return this.props.tarefas.map((tarefa, indice) => (
                <div className="task" key={indice}>
                    <p>{tarefa.description}</p>
                    <div className="btn_action_task">
                        { !tarefa.done &&
                            <Button btnStyle="success" nome="Check"
                                    action={() => this.props.marcarTarefaConcluida(tarefa)} />
                        }

                        { tarefa.done &&
                            <Button btnStyle="add" nome="Edit"  />
                        }
                        <Button btnStyle="danger" nome="Delete"
                                action={() => this.props.deletar(tarefa._id) } />
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ deletar: deletar, marcarTarefaConcluida: marcarTarefaConcluida }, dispatch);
export default connect(null, mapDispatchToProps)(Lista);