import { ADD_ITEM,  UPDATE_ITEM,  DELETE_ITEM } from './TodoTypes'
import { todos } from './TodoStates'

// const initialState = {
//     todos: []
// }
const TodoReducer = (state = todos, action) => {
    let newTodos;
    switch(action.type){
        case ADD_ITEM: 
            newTodos = [...state];
            newTodos.unshift(action.payload);
            return newTodos;
          

        case  UPDATE_ITEM:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }
            return newTodos
        
        case DELETE_ITEM: 
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return newTodos;
          

        default : return state
       
    }
      
}
export default  TodoReducer