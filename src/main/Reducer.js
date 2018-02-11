import {combineReducers} from "redux";
import tarefaReducer from "./../component/tarefa/TarefaReducer";
import userReducer from "./../component/user/UserReducer";
import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({
    tarefa: tarefaReducer,
    user: userReducer,
    toastr: toastrReducer
});