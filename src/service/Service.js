export default class Service {

    constructor(httpClient, endpoint) {
        this._baseUrl = "http://localhost:3000/";
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
}