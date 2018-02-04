import React, {Component} from "react";
import {Link} from "react-router-dom";
import Button from "./../template/Button";
import {combineReducers} from "redux";
import {connect} from "react-redux";
import {autenticar} from "./UserActions";

class FormAuth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: ""
        };

        this.alterValueInState = this.alterValueInState.bind(this);
        this.autenticar = this.autenticar.bind(this);
    }

    alterValueInState(key, value) {
       this.setState({ [key]: value });
    }

    clearValuesState() {
        this.setState({ email: "", senha: ""})
    }

    async autenticar(event) {
        event.preventDefault();
        this.props.autenticar({ email: this.state.email, senha: this.state.senha});
        if (this.props.isAuthenticated) {
            this.props.history.push("/tarefa");
        } else {
            // this.clearValuesState();
        }
    }

    render() {
        return (
            <div id="form_authentication_user">
                <h1>Autenticar Usuario</h1>
                <form id="new_user" onSubmit={(event) => this.autenticar(event)}>

                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" value={this.state.email}
                           onChange={(event) => this.alterValueInState("email", event.target.value) }
                           placeholder="Email"/><br/>

                    <label htmlFor="senha">Senha:</label><br/>
                    <input type="password" id="senha" value={this.state.senha}
                           onChange={(event) => this.alterValueInState("senha", event.target.value) }
                           placeholder="Senha"/><br/>

                    <Button isBtnForm={true} nome="Logar" btnStyle="add"/>
                </form>
                <br/>
                <Link to="/register" className="btn btn-add">Registrar</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ isAuthenticated: state.user.isAuthenticated });
const mapDispatchToProps = (dispatch) => combineReducers({ autenticar: autenticar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FormAuth);