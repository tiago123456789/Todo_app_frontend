import Constantes from "../Constantes";

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

    setValueInHeaderRequest(key, value) {
        this._httpClient.defaults.headers.common[key] = value;
    }
}