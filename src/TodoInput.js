import React, {useState}from 'react'
import './redux/Todo.css'
import TodoList from './TodoList'
import { addItem }from './redux/TodoActions'
import { useDispatch } from 'react-redux';



const TodoInput = () => {
    const [name, setName] = useState();
    const [maxTime, setMaxTime] = useState();
    const [completed , setCompleted] = useState();
    let dispatch = useDispatch();
  

 
   const handleSubmit = (e) => {
        e.preventDefault();
   }
    return (
        <div>
            <h2>Todo-List</h2>
            <form onSubmit ={handleSubmit}>
                <input type="text"   
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="name"/> 
                <input type="text"  onChange= {(e)=>setMaxTime(e.target.value)} value= {maxTime} placeholder="maximum time"/> 
                <input type="text"  onChange= {(e)=>setCompleted(e.target.value)} value= {completed} placeholder= "when to be completed"/> 
                <button onClick={()=>{
                       dispatch(addItem({
                            name: name
                    }));
                        setName('');
                    }}>ADD</button>
            </form>
           <TodoList />
          
        </div>
    )
}

export default TodoInput
