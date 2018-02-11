import Constantes from "../../config/Constantes";

const INITIAL_STATE = {
    autenticado: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Constantes.TYPE_ACTIONS.USER.AUTHENTICATED:
            return {...state, autenticado: action.payload };
        default:
            return state;
    }
}