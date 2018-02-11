import { toastr } from "react-redux-toastr";
import * as axios from "axios";
import TarefaService from "../../service/TarefaService";
import Constantes from "../../config/Constantes";

const tarefaService = new TarefaService(axios);

const criarNova = (tarefa) => {
    return async (dispatch) => {
        try {
            await tarefaService.criar(tarefa);
            toastr.success(Constantes.MESSAGE.SUCCESS.TASK.SAVE);
            dispatch([
                cleanField(),
                buscarTodas()
            ]);
        } catch(e) {
            toastr.error(Constantes.FAILED.SUCCESS.TASK.SAVE);
            throw new Error(e);
        }

    }
};

const deletar = (id) => {
    return async (dispatch) => {
        try {
            await tarefaService.deletar(id);
            toastr.success(Constantes.MESSAGE.SUCCESS.TASK.DELETE);
            dispatch(buscarTodas())
        } catch (e) {
            toastr.error(Constantes.MESSAGE.FAILED.TASK.DELETE);
            throw new Error(e);
        }
    }
};

const alterarCampoDescricao = (event) => {
    return { type: Constantes.TYPE_ACTIONS.TASK.ALTER_FIELD_DESCRIPTION, payload: event.target.value };
};

const marcarTarefaConcluida = (tarefa) => {
    tarefa.done = true;
    return async dispatch => {
        try {
            await tarefaService.atualizar(tarefa._id, tarefa);
            toastr.success(Constantes.MESSAGE.SUCCESS.TASK.MAKE_DONE_TASK);
            dispatch(buscarTodas());
        } catch (error) {
            toastr.error(Constantes.MESSAGE.FAILED.TASK.MAKE_DONE_TASK);
            throw new Error(error);
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

const editar = (tarefa) => {
    return { type: Constantes.TYPE_ACTIONS.TASK.EDIT, payload: tarefa };
};

const atualizar = (tarefa) => {
  return async (dispatch, getState) => {
      try {
        await tarefaService.atualizar(getState().tarefa.id, {...tarefa, id: getState().tarefa.id });
          toastr.success(Constantes.MESSAGE.SUCCESS.TASK.EDIT);
          dispatch([cleanField(), buscarTodas()]);
      } catch(e) {
          toastr.error(Constantes.MESSAGE.FAILED.TASK.EDIT);
          throw new Error(e);
      }
  }
};


export {
    atualizar,
    editar,
    cleanField,
    buscarTodas,
    marcarTarefaConcluida,
    criarNova,
    deletar,
    alterarCampoDescricao
};