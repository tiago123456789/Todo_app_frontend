import jwt from "jsonwebtoken";
import Constantes from "../Constantes";

export default class JwtService {

    _decode() {
        return jwt.decode(this.getToken());
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

    isExpired() {
        const timeCurrent = new Date().getTime() / 1000;
        const timeExpired = parseInt(this.getSpecifiedValue("exp"));
        return timeCurrent > timeExpired;
    }
}