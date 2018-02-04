
import AuthService from "../../service/AuthService";
import axios from "axios";
import Constantes from "../../Constantes";

const authService = new AuthService(axios);
const autenticar = (credencias) => {
    console.log(credencias);
    return async (dispatch) => {
        try {
            const response = await authService.autenticar(credencias);
            localStorage.setItem(Constantes.LOCALSTORAGE.CHAVE.TOKEN, response.data.token);
            dispatch({ type: Constantes.TYPE_ACTIONS.USER_AUTHENTICATED, payload: true });
        } catch (e) {
            throw new Error(e);
        }
    };
};

export { autenticar };