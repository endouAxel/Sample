import React from 'react'
import './redux/Todo.css'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
     const todos = useSelector(state => state.TodoReducer);
    return (
        <div>
             <table>
                <tbody>
                   
                        {todos.map((todo) => {
                            return <TodoItem key={todo.id} todo={todo}/>;
                        })}
                   
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
