import Constantes from "../../config/Constantes";

const INITIAL_STATE = {
    tarefas: [],
    id: null,
    description: '',

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Constantes.TYPE_ACTIONS.TASK.EDIT:
            return {...state, description: action.payload.description, id: action.payload._id };
        case Constantes.TYPE_ACTIONS.TASK.ALTER_FIELD_DESCRIPTION:
            return {...state, "description": action.payload };
        case Constantes.TYPE_ACTIONS.TASK.CLEAN_FIELD:
            return {...state, "description": "", id: null };
        case Constantes.TYPE_ACTIONS.TASK.LIST:
            return {...state, tarefas: action.payload[0].tasks };
        default: return state;
    }
}