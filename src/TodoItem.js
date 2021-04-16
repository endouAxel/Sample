import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem, updateItem } from './redux/TodoActions';


const TodoItem = ({ todo }) => {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name);
    const [maxTime, setMaxTime] = useState(todo.maxTime);
    const [completed, setCompleted] = useState(todo.completed);
    let dispatch = useDispatch();
    return (
        <tr>
            <td>#{todo.id.length > 1 ? todo.id[2] : todo.id}</td>
            <td>
              {editable ?
                        <input type="text" 
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.name}</h4>}
            </td>
             <td>
              {editable ?
                        <input type="text"
                            value={maxTime}
                            onChange={(e) => {
                                setMaxTime(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.maxTime}</h4>}
            </td>
             <td>
              {editable ?
                        <input type="text" 
                            value={completed}
                            onChange={(e) => {
                                setCompleted(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.completed}</h4>}
            </td>
          <td><button onClick={() => {
                        dispatch(updateItem({
                            ...todo,
                            name: name,
                            maxTime: maxTime,
                            completed: completed
                        }))
                        if(editable) {
                         setName(todo.name);   
                         setMaxTime(todo.maxTime); 
                         setCompleted(todo.completed) 
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button></td>
           <td><button onClick={() => dispatch(deleteItem(todo.id))}>Delete</button></td>
        </tr>
    )
}

export default TodoItem
