import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem, updateItem } from './redux/TodoActions';


const TodoItem = ({ todo }) => {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();
    return (
        <td>
            <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
            <div>
              {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.name}</h4>}
            </div>
          <button onClick={() => {
                        dispatch(updateItem({
                            ...todo,
                            name: name
                        }))
                        if(editable) {
                         setName(todo.name);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button>
           <button onClick={() => dispatch(deleteItem(todo.id))}>Delete</button>
        </td>
    )
}

export default TodoItem
