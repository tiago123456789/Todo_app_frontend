import Service from "./Service";

export default class AuthService extends Service {

    constructor(httpClient) {
        super(httpClient, "users");
    }

    async autenticar(credenciais) {
        return await this.getHttpClient().post(`${this.getBaseUrl()}${this.getEndpoint()}/auth`, credenciais);
    }
}