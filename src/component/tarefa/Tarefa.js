import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { buscarTodas } from "./TarefaActions";
import { logout } from "./../user/UserAction"
import NovaTarefa from "./Novo";
import ListaTarefa from "./Lista";
import Header from "../template/Header";
import DivContainer from "../template/DivContainer";

class Tarefa extends Component {

    componentWillMount() {
        this.props.buscarTodas();
    }

    render() {
        return (
           <div>
               <Header sair={this.props.logout}/>
               <DivContainer>
                   <NovaTarefa/>
                   <ListaTarefa tarefas={this.props.tarefas}/>
               </DivContainer>
           </div>
        )
    }
}

const mapStateToProps = (state) => ({ tarefas: state.tarefa.tarefas });
const mapDispatchToProps = (dispatch) => bindActionCreators({
    buscarTodas: buscarTodas,
    logout: logout
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Tarefa);