import React, { Component } from 'react';
import "./sistema.css";

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <h1 id="logo">TODO APP</h1>
                        <ul>
                            <li>
                                <a href="" className="btn btn-danger">Sair</a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <div className="container">

                    <div id="form_register_user">
                        <h1>Novo Usuario</h1>
                        <form id="new_user">

                            <label htmlFor="nome">Nome:</label><br/>
                            <input type="text" id="nome" placeholder="Nome"/><br/>

                            <label htmlFor="email">Email:</label><br/>
                            <input type="email" id="email" placeholder="Email"/><br/>

                            <label htmlFor="senha">Senha:</label><br/>
                            <input type="password" placeholder="Senha"/><br/>

                            <input type="submit" value="Registrar-se" className="btn btn-success"/>
                        </form>
                    </div>

                    <form id="new_task">
                        <label htmlFor="descricao">Nova tarefa:</label>
                        <br/>
                        <input type="text" id="descricao" placeholder="Nova tarefa"/>
                        <input type="submit" value="Adicionar" className="btn btn-add"/>
                    </form>

                    <section className="list_tasks">
                        <h2>Lista de Tarefas</h2>
                        <div className="task">
                            <p>afladsfjklasdflasdjfllasdfsadfas</p>
                            <div className="btn_action_task">
                                <button className="btn btn-success">Check</button>
                                <button className="btn btn-add">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>

                        <div className="task">
                            <p>afladsfjklasdflasdjfllasdfsadfas</p>
                            <div className="btn_action_task">
                                <button className="btn btn-success">Check</button>
                                <button className="btn btn-add">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>

                        <div className="task">
                            <p>afladsfjklasdflasdjfllasdfsadfas</p>
                            <div className="btn_action_task">
                                <button className="btn btn-success">Check</button>
                                <button className="btn btn-add">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
