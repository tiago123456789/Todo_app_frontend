import React from "react";

export default (props) => (
    <header>
        <nav>
            <h1 id="logo">TODO APP</h1>
            <ul>
                <li>
                    <a href="" className="btn btn-danger" onClick={props.sair}>Sair</a>
                </li>
            </ul>
        </nav>
    </header>
)