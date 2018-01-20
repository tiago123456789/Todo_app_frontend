import React, { Component } from "react";
import NovaTarefa from "./Novo";
import ListaTarefa from "./Lista";

export default class Tarefa extends Component {

    render() {
        return (
           <div>
               <NovaTarefa/>
               <ListaTarefa/>
           </div>
        )
    }
}