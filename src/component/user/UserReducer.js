import Constantes from "../../Constantes";

const INITIAL_STATE = {
  isAuthenticated: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Constantes.TYPE_ACTIONS.USER_AUTHENTICATED:
            return { ...state, isAuthenticated: action.payload };
            break;
        default:
            return state;
    }
}