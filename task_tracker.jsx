import { useState } from "react";
import './App.css'
export default function  App(){
    const [todo,setTodo]=useState([]);
    const [value,setValue]=useState('')
function handle(e){
    e.preventDefault();
    let newitem = value;
    let newlist = [...todo,{text:newitem,}]
    setTodo(newlist)
    setValue('')
}
const removeItem = (index) => {
    const newList = [...todo];
    newList.splice(index, 1);
    setTodo(newList);
  };
    let list = todo.map((item,index)=>
    <li className="list">
        {item.text}&nbsp;&nbsp;&nbsp;
    <button onClick={()=>removeItem(index)}>-</button>
    </li>)
    return(
        <>
        <h1>ToDo</h1>
        <div className="mydiv">
        <main>
         {list} 
        <form onSubmit={handle}> 
        <input 
            placeholder="Add Todo..."  
            value={value}
            onChange={e=>setValue(e.target.value)} type='text'
        />
        </form>
        </main>
        </div>
        </>
    )
}
