import React, {useState}from 'react'
import './redux/Todo.css'
import TodoList from './TodoList'
import { addItem }from './redux/TodoActions'
import { useDispatch } from 'react-redux';



const TodoInput = () => {
    const [name, setName] = useState([]);
    const [maxTime, setMaxTime] = useState([]);
    const [completed , setCompleted] = useState([]);
    // const [count, setCount] = useState(0);
    let dispatch = useDispatch();
  
    // const handleCount = () => {
    //     setCount(count + 1)
    // }
 
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
                <button className = "addbtn" onClick={()=>{
                       dispatch(addItem({
                            id: Math.floor(Math.random() * 100),
                            name: name,
                            maxTime: maxTime,
                            completed: completed
                    }));
                        setName('');
                        setMaxTime('');
                        setCompleted('');
                    }}>ADD</button>
            </form>
           <TodoList />
          
        </div>
    )
}

export default TodoInput
