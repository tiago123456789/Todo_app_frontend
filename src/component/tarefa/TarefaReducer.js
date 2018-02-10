import Constantes from "../../Constantes";

const INITIAL_STATE = {
    tarefas: [],
    description: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Constantes.TYPE_ACTIONS.TASK.ALTER_FIELD_DESCRIPTION:
            return {...state, "description": action.payload };
        case Constantes.TYPE_ACTIONS.TASK.CLEAN_FIELD:
            return {...state, "description": "" };
        case Constantes.TYPE_ACTIONS.TASK.LIST:
            return {...state, tarefas: action.payload[0].tasks };
        default: return state;
    }
}