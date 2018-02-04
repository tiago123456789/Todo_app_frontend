import React, { Component } from "react";
import NovaTarefa from "./Novo";
import ListaTarefa from "./Lista";
import Header from "../template/Header";
import DivContainer from "../template/DivContainer";

export default class Tarefa extends Component {

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