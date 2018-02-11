export default {
    BASE_URL: "http://localhost:3000/",
    MESSAGE: {
        SUCCESS: {
            USER: {
                AUTHENTICATED: "Autenticado com sucesso!",
                LOGOUT: "Logout com sucesso!"
            },
            TASK: {
                SAVE: "Salvo com sucesso!",
                EDIT: "Editado com sucesso!",
                DELETE: "Deletado com sucesso!",
                MAKE_DONE_TASK: "Tarefa concluída!"
            }
        },
        FAILED: {
            USER: {
                AUTHENTICATED: "Dados inválidos!"
            },
            TASK: {
                SAVE: "Não foi possível salvar!",
                EDIT: "Não foi possível editar!",
                DELETE: "Não foi possível deletar!",
                MAKE_DONE_TASK: "Não foi possível marcar tarefa como concluída!"
            }
        }
    },
    TYPE_ACTIONS: {
        TASK: {
            LIST: "TASK_LIST",
            CLEAN_FIELD: "CLEAN_FIELD",
            ALTER_FIELD_DESCRIPTION: "ALTER_FIELT_DESCRIPTION",
            EDIT: "EDIT"
        },
        USER: {
            AUTHENTICATED: "AUTHENTICATED"
        }
    },
    LOCALSTORAGE: {
        CHAVE: {
            TOKEN: "token"
        }
    },
    HEADER: {
        CHAVE: {
            AUTHORIZATION: "Authorization"
        }
    },
    JWT: {
        PREFIX: "Bearer "
    }
}