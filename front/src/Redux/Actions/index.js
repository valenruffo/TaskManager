import axios from 'axios';

//ACTION TYPES
export const GET_TASKS = 'GET_TASKS';
export const CREATE_TASKS = 'CREATE_TASKS'
export const DELETE_TASK = 'DELETE_TASK';


//ACTIONS

export function deleteTask(taskId)  {
  return async (dispatch) => {
    try {
      // Realizar la solicitud DELETE al backend
      const response = await axios.delete(`http://localhost:3003/tasks/${taskId}`);

      // Despachar la acción de eliminación de tarea con el ID de la tarea
      dispatch({
        type: DELETE_TASK,
        payload: response.data.taskId,
      });
    } catch (error) {
      // Manejar el error, si corresponde
      console.log(error);
      return Promise.reject(error);
    }
  };
};;

export function getTasks() {
    return async (dispatch) =>{
        try {
            const response = await axios('http://localhost:3003/tasks/')
            console.log(response.data)
            return dispatch({
                type: GET_TASKS,
                payload: response.data
            })
        } catch (error) {
            
        }
    }

}


export function createTasks (info) {
    return async (dispatch) => {
      try {
        const response = await axios.post('http://localhost:3003/tasks/', info)
        console.log(response.data)
        return dispatch({
          type: CREATE_TASKS,
          payload: response.status
        })
      } catch (error) {
        console.log(error)
        alert(error.response.data.error)
      }
    }
  }
