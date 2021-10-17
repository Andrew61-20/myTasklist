import { combineReducers } from "redux";
import actionTypes from './tasksActionTypes';

const close = state => state.map(task => task.modalId === task.id && task.modalId !== null ? {
        ...task,
        isModalOpen: false,
        modalId: ''
    } : task)

const items = (state = [], {type, payload}) => {
    switch (type) {
        case actionTypes.SAVE:
            return [...state, payload.task]
        case actionTypes.REMOVE:
            return state.filter(task => task.id !== payload.taskId)
        case actionTypes.TOOGLE:
            return state.map(task => 
                task.id === payload.taskId ? { ...task, completed: !payload.completed }
                  : task)
        case actionTypes.OpMODAL:
            return state.map(task => task.id === payload.taskId ? {
                ...task,
                isModalOpen: true,
                modalId: payload.taskId
            } : task)
        case actionTypes.UpTEXT:
            return payload.changedTaskname !== "" ?
                state.every(task => task.taskname !== payload.changedTaskname) ?
                    state.map(task => task.id === task.modalId ? {
                        ...task,
                        taskname: payload.changedTaskname,
                        isModalOpen: false,
                        modalId: ''
                    } : task) :
                alert(`Task is already in use !`) :
            close(state)
        case actionTypes.ClMODAL:
            return close(state)
        case actionTypes.LsGET:
            return JSON.parse(payload.persTask)
        case actionTypes.EsMODAL:
            return close(state)
        // case actionTypes.TICK:
        //     state.map(task => {
        //         if (task.hrs === 0 && task.min === 0 && task.sec === 0)
        //             return {...task, hrs: task.hrs, min: task.min, sec: task.sec};
        //         if (task.min === 0 && task.sec === 0)
        //             return {...task, hrs: task.hrs - 1, min: 59, sec: 59};
        //         if (task.sec === 0)
        //             return {...task, hrs: task.hrs, min: task.min - 1, sec: 59};
        //         return {...task, hrs: task.hrs, min: task.min, sec: task.sec - 1};
        //     })
        //     break
        default:
            return state;
    };
}

export default combineReducers ({ items })