import React from "react";

export default (props) => {
    if (props.isBtnForm) {
       return <input type="submit" value={props.nome} className={`btn btn-${props.btnStyle}`}/>
    } else {
       return <button className={`btn btn-${props.btnStyle}`}>{props.nome}</button>
    }
}