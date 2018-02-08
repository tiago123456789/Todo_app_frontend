import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { buscarTodas } from "./TarefaActions";
import NovaTarefa from "./Novo";
import ListaTarefa from "./Lista";
import Header from "../template/Header";
import DivContainer from "../template/DivContainer";

class Tarefa extends Component {


    render() {
        return (
           <div>
               <Header/>
               <DivContainer>
                   <NovaTarefa/>
                   <ListaTarefa/>
               </DivContainer>
           </div>
        )
    }
}

const mapStateToProps = (state) => ({ });
const mapDispatchToProps = (dispatch) => bindActionCreators({ buscarTodas: buscarTodas }, dispatch);
export default connect(null, mapDispatchToProps)(Tarefa);