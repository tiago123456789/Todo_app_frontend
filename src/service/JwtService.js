import jwt from "jsonwebtoken";
import Constantes from "../Constantes";

export default class JwtService {

    constructor() {
        this._token = this.getToken();s
    }

    _decode() {
        return jwt.decode(this._token);
    }

    getToken() {
        return localStorage.getItem(Constantes.LOCALSTORAGE.CHAVE.TOKEN);
    }

    getPayload() {
        return this._decode();
    }

    getSpecifiedValue(key) {
        return this._decode()[key];
    }
}