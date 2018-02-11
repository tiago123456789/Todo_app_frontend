import Constantes from "../config/Constantes";

export default class Service {

    constructor(httpClient, endpoint) {
        this._baseUrl = Constantes.BASE_URL;
        this._httpClient = httpClient;
        this._endpoint = endpoint;
    }

    getBaseUrl() {
        return this._baseUrl;
    }

    getHttpClient() {
        return this._httpClient;
    }

    getEndpoint() {
        return this._endpoint;
    }

    setValueInHeader(key, value, request) {

        this._httpClient.defaults.headers.common[key] = value;
    }
}