import { v4 as uuidv4 } from 'uuid';
import actionTypes from './tasksActionTypes'

const saveTask = taskname => ({
    type: actionTypes.SAVE,
    payload: {task: {
        id: uuidv4(),
        taskname,
        completed: false,
        isModalOpen: false,
        modalId: ''
        // hrs: 2,
        // min: 0,
        // sec: 0
    }},
});

const removeTask = taskId => ({
    type: actionTypes.REMOVE,
    payload: {
       taskId 
    },
});

const toogleCompleted = taskId => ({
    type: actionTypes.TOOGLE,
    payload: {
       taskId
    },
})

const openModal = taskId => ({
    type: actionTypes.OpMODAL,
    payload: { 
       taskId       
    },
})

const updateText = changedTaskname => ({
    type: actionTypes.UpTEXT,
    payload: {
      changedTaskname
    },
})

const closeModal = () => ({
    type: actionTypes.ClMODAL,
    payload: {
    },
})

const locStorGet = persTask => ({
    type: actionTypes.LsGET,
    payload: {
        persTask
    },
})

const escapeModal = () => ({
    type: actionTypes.EsMODAL,
    payload: {
    },
})

// const addTime = () => dispatch => {
//     setInterval(() => dispatch(timeCount()), 1000)
// }

// const timeCount = taskId => ({
//     type: actionTypes.TICK,
//     payload: {
//         taskId
//     },
// })

export default {
    saveTask,
    removeTask,
    toogleCompleted,
    updateText,
    openModal,
    closeModal,
    locStorGet,
    escapeModal
    // timeCount
}



    