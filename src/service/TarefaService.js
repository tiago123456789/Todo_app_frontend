import Service from "./Service";
import JwtService from "./JwtService";
import Constantes from "../Constantes";

export default class TarefaService extends Service {

    constructor(httpClient) {
        super(httpClient, "users");
        this._jwtService = new JwtService();
        this.setValueInHeaderRequest(Constantes.HEADER.CHAVE.AUTHORIZATION, this._jwtService.getToken());
    }

    async criar(tarefa) {
        return await this.getHttpClient()
                         .post(`${this.getBaseUrl()}${this.getEndpoint()}/${this._jwtService.getSpecifiedValue("id")}/tasks`, tarefa)
    }

    async listar() {
        return await this.getHttpClient()
                         .get(`${this.getBaseUrl()}${this.getEndpoint()}/${this._jwtService.getSpecifiedValue("id")}/tasks`);
    }

    async atualizar(id, conteudoModificado) {
        return await this.getHttpClient()
                         .put(`${this.getBaseUrl()}${this.getEndpoint()}/${this._jwtService.getSpecifiedValue("id")}/tasks/${id}`, conteudoModificado);
    }

    async deletar(id) {
        return await this.getHttpClient()
            .delete(`${this.getBaseUrl()}${this.getEndpoint()}/${this._jwtService.getSpecifiedValue("id")}/tasks/${id}`);
    }
}