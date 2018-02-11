import Constantes from "../../Constantes";
import JwtService from "../../service/JwtService";

const jwtService = new JwtService();

const autenticar = () => {
    return { type: Constantes.TYPE_ACTIONS.USER.AUTHENTICATED, payload: true };
};

const logout = () => {
    localStorage.clear();
    return { type: Constantes.TYPE_ACTIONS.USER.AUTHENTICATED, payload: false };
};

const verificarAutorizacao = () => {
   const token = localStorage.getItem(Constantes.LOCALSTORAGE.CHAVE.TOKEN);
   if (!token || jwtService.isExpired()) {
       return logout();
   }
};

export { autenticar, logout, verificarAutorizacao };