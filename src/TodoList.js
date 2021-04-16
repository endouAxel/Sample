import React from 'react'
import './redux/Todo.css'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
     const todos = useSelector(state => state);
    return (
        <div>
             <table>
                <tbody>
                    <tr>
                        {todos.map((todo) => {
                            return <TodoItem key={todo.id} todo={todo}/>;
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
