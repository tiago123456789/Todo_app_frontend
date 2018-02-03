import Service from "./Service";

export default class UserService extends Service {

    constructor(httpClient) {
        super(httpClient);
        this._endpoint = "users";
    }

    async register(content) {
        return await this.getHttpClient().post(`${this.getBaseUrl()}${this._endpoint}`, content);
    }
}