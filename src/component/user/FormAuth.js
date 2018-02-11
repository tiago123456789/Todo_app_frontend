import React, {Component} from "react";
import {Link} from "react-router-dom";
import Button from "./../template/Button";
import AuthService from "../../service/AuthService";
import { autenticar } from "./UserAction";
import * as axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Constantes from "../../Constantes";

class FormAuth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: ""
        };
        this._authService = new AuthService(axios);
        this.alterValuesState = this.alterValuesState.bind(this);
        this.autenticar = this.autenticar.bind(this);
    }

    alterValuesState(key, value) {
        this.setState({ [key]: value });
    }

    cleanValuesState() {
        this.setState({ email: "", senha: "" });
    }

    definirTokenLocalStorage(token) {
        localStorage.setItem(Constantes.LOCALSTORAGE.CHAVE.TOKEN, token);
    }

    async autenticar(event) {
        event.preventDefault();
        try {
            const response = await this._authService.autenticar(this.state);
            this.definirTokenLocalStorage(response.data.token);
            this.cleanValuesState();
            this.props.autenticar();
            if (this.props.isAutorization) {
                this.props.history.push("/tarefa");
            }
        } catch (e) {
            throw new Error(e);
        }
    }

    render() {
        return (
            <div id="form_authentication_user">
                <h1>Autenticar Usuario</h1>
                <form id="new_user" onSubmit={(event) => this.autenticar(event)}>

                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" value={this.state.email}
                           onChange={(event) => this.alterValuesState("email", event.target.value) }
                           placeholder="Email"/><br/>

                    <label htmlFor="senha">Senha:</label><br/>
                    <input type="password" id="senha" value={this.state.senha}
                           onChange={(event) => this.alterValuesState("senha", event.target.value) }
                           placeholder="Senha"/><br/>

                    <Button isBtnForm={true} nome="Logar" btnStyle="add"/>
                </form>
                <br/>
                <Link to="/register" className="btn btn-add">Registrar</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ isAutorization: state.user.autenticado });
const mapDispatchToProps = (dispatch) => bindActionCreators({ autenticar: autenticar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FormAuth);
