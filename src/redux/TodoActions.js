import { ADD_ITEM,  UPDATE_ITEM,  DELETE_ITEM } from './TodoTypes'

export const addItem = (todo) => {
    return { 
        type: ADD_ITEM,
        payload: todo
    }
}
export const updateItem = (todo) => {
    return { 
        type: UPDATE_ITEM,
        payload: todo
    }
}
export const deleteItem = (todoId) => {
    return { 
        type:  DELETE_ITEM,
        payload: todoId
    }
}