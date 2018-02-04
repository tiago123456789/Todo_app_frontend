import Service from "./Service";

export default class UserService extends Service {

    constructor(httpClient) {
        super(httpClient, "users");
    }

    async register(content) {
        return await this.getHttpClient().post(`${this.getBaseUrl()}${this.getEndpoint()}`, content);
    }
}