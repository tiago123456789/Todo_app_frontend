
import TarefaService from "../../service/TarefaService";
import * as axios from "axios";
import Constantes from "../../Constantes";

const tarefaService = new TarefaService(axios);

const criarNova = (tarefa) => {
    return async (dispatch) => {
        try {
            await tarefaService.criar(tarefa);
            dispatch([
                { type: Constantes.TYPE_ACTIONS.TASK.CREATE },
                cleanField()
            ]);
        } catch(e) {
            throw new Error(e);
        }

    }
};

const deletar = (id) => {
  return async (dispatch) => {
      try {
          await tarefaService.deletar(id);
          dispatch(buscarTodas())
      } catch (e) {
          throw new Error(e);
      }
    }
};

const marcarTarefaConcluida = (id) => {
  return async dispatch => {
      try {
         await tarefaService.atualizar(id, { done: true });
         dispatch(buscarTodas());
      } catch (error) {

      }
  }
};

const buscarTodas = () => {
  return async (dispatch) => {
      try {
          const response = await tarefaService.listar();
          dispatch({ type: Constantes.TYPE_ACTIONS.TASK.LIST, payload: response.data })
      } catch(e) {
          throw new Error(e);
      }
  }
};

const cleanField = () => {
    return { type: Constantes.TYPE_ACTIONS.TASK.CLEAN_FIELD };
};


export { cleanField, buscarTodas, marcarTarefaConcluida, criarNova, deletar };