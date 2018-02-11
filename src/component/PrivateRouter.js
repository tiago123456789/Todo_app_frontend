import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { verificarAutorizacao } from "./user/UserAction";
import { Redirect, Route } from "react-router-dom";

class PrivateRouter extends Component {

    componentDidMount() {
        this.props.verificarAutorizacao();
    }

    render() {
        if (this.props.isAutorization) {
            return <Route path={this.props.path} component={this.props.component} />
        } else {
            return <Redirect to="/login" />
        }
    }
}

const mapStateToProps = state => ({ isAutorization: state.user.autenticado });
const mapDispatchToProps = dispatch => bindActionCreators({
    verificarAutorizacao: verificarAutorizacao
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter);