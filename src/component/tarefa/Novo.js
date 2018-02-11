import React, { Component } from "react";
import { connect } from "react-redux";
import { criarNova, atualizar } from "./TarefaActions";
import { bindActionCreators } from "redux";
import { alterarCampoDescricao } from "./TarefaActions";
import Button from "./../template/Button";

class NovoTarefa extends Component {

    constructor(props) {
        super(props);
        this.criarOuAtualizar = this.criarOuAtualizar.bind(this);
    }

    criarOuAtualizar(event) {
        event.preventDefault();
        const conteudo = { description: this.props.description };
        if (this.props.isEdition) {
            this.props.atualizar(conteudo)
        } else {
            this.props.criarNova(conteudo);
        }
    }

    render() {
        return (
            <form id="new_task" onSubmit={this.criarOuAtualizar}>
                <label htmlFor="descricao">Nova tarefa:</label>
                <br/>
                <input type="text" id="descricao"
                       placeholder="Nova tarefa"
                       onChange={this.props.alterarCampoDescricao }
                       value={this.props.description}
                       />
                <Button isBtnForm={true} nome="Adicionar" btnStyle="add"/>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({ description: state.tarefa.description, isEdition: state.tarefa.id });
const mapDispatchToProps = (dispatch) => bindActionCreators({
    criarNova: criarNova,
    atualizar: atualizar,
    alterarCampoDescricao: alterarCampoDescricao
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(NovoTarefa);