import React, { Component } from "react";
import { connect } from "react-redux";
import { criarNova } from "./TarefaActions";
import { bindActionCreators } from "redux";
import { alterarCampoDescricao } from "./TarefaActions";
import Button from "./../template/Button";

class NovoTarefa extends Component {

    constructor(props) {
        super(props);
        this.criar = this.criar.bind(this);
    }

    criar(event) {
        event.preventDefault();
        this.props.criarNova({ description: this.props.description });
    }

    render() {
        return (
            <form id="new_task" onSubmit={this.criar}>
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

const mapStateToProps = (state) => ({ description: state.tarefa.description });
const mapDispatchToProps = (dispatch) => bindActionCreators({
    criarNova: criarNova,
    alterarCampoDescricao: alterarCampoDescricao
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(NovoTarefa);