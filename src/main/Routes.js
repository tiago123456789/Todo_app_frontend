import React from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import FormAuth from "./../component/user/FormAuth";
import Register from "./../component/user/Register";
import Tarefa from "./../component/tarefa/Tarefa";
import PrivateRouter from "./../component/PrivateRouter";

export default () => {

    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={FormAuth}/>
                <Route path="/register" component={Register} />
                <PrivateRouter path="/tarefa" component={Tarefa} />
                <Redirect to="/login"/>
            </Switch>
        </HashRouter>
    )

}