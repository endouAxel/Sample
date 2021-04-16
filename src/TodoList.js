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
                    <tr>
                        <th></th>
                        <th>Name of the Todo</th>
                        <th>Maximum Time</th>
                        <th>When to be completed</th>
                        <th></th>
                        <th></th>
                    </tr>
                   
                    {todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo}/>;
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
