import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import FormAuth from "./../component/user/FormAuth";
import Register from "./../component/user/Register";
import Tarefa from "./../component/tarefa/Tarefa"

export default () => {

    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={FormAuth}/>
                <Route path="/register" component={Register} />
                <Route path="/tarefa" render={() => {
                    return false ? <Route component={Tarefa} /> : <Route component={FormAuth} />;
                }} />
            </Switch>
        </HashRouter>
    )

}