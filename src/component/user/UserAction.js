import { toastr } from "react-redux-toastr";
import Constantes from "../../config/Constantes";
import JwtService from "../../service/JwtService";

const jwtService = new JwtService();

const autenticar = () => {
    return { type: Constantes.TYPE_ACTIONS.USER.AUTHENTICATED, payload: true };
};

const logout = () => {
    return dispatch => {
        localStorage.removeItem(Constantes.LOCALSTORAGE.CHAVE.TOKEN);
        toastr.success(Constantes.MESSAGE.SUCCESS.USER.LOGOUT);
        dispatch({ type: Constantes.TYPE_ACTIONS.USER.AUTHENTICATED, payload: false });
    }
};

const verificarAutorizacao = () => {
    return dispatch => {
       const token = localStorage.getItem(Constantes.LOCALSTORAGE.CHAVE.TOKEN);
       if (!token) {
            return dispatch(logout());
       }

       if (jwtService.isExpired()) {
           return dispatch(logout());
       }
    }
};

export { autenticar, logout, verificarAutorizacao };