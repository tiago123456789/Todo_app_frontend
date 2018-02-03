export default class Service {

    constructor(httpClient) {
        this._baseUrl = "http://localhost:3000/";
        this._httpClient = httpClient;
    }

    getBaseUrl() {
        return this._baseUrl;
    }

    getHttpClient() {
        return this._httpClient;
    }
}