import {combineReducers} from "redux";
import tarefaReducer from "./../component/tarefa/TarefaReducer";
import {reducer as toastrReducer} from "react-redux-toastr";

export default combineReducers({
    toastr: toastrReducer,
    tarefa: tarefaReducer
});