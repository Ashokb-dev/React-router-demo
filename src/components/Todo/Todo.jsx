import React, { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';

const Todo = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [isOn, setIson] = useState(false)
  const [cts, setCts] = useState([])
  // const [completed, setCompleted] = useState(false)

  var id = uuidv4();

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }, [])

  const saveToLS = (params)=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  function toggle(){
    setIson(!isOn)
    let cts = todos.filter(x=>{
      return x.completed===false;
    }) 
    setCts(cts);
  }

  function handlecb(id){ 
    // console.log(id)
    let index = todos.findIndex(x=>{
      return x.id===id;
    })
    let newTodos = [...todos]
    newTodos[index].completed = !todos[index].completed;
    setTodos(newTodos)
    saveToLS()
  }

  function AddTodo(){
    setTodos([...todos,{id,todo,completed:false}])
    // setCts([...todos,{id,todo,completed:false}])
    setTodo("")
    console.log(todos)
    saveToLS()
  }

  function handleEdit(id){
    let Todo = todos.filter(x=>{
      return x.id===id;
    })
    let newTodo = Todo[0].todo
    setTodo(newTodo)
    handleDelete(id)
    saveToLS()
  }

  function handleDelete(id){
    let newTodos = todos.filter(x=>{
      return x.id!==id;
    })
    setTodos(newTodos);
    saveToLS()
  }

  return <div className='text-center w-[80vw]'>
      <div className='flex gap-10'>
        <input className='border border-black w-full p-1 rounded-sm' value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" />
        <button type='button' disabled={todo.length<1} className={`bg-blue-600 w-fit px-3 py-2 rounded-sm disabled:bg-blue-400`} onClick={AddTodo}>Add</button>
      </div>
      <div className='flex items-center justify-center gap-10'>
        <span className={`${isOn===false && "font-semibold"}`} >Show both completed and incompleted todos</span>
        <button
          onClick={toggle}
          className={`w-12 h-6 m-2 flex items-center rounded-full p-1 duration-300 ${
            isOn ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-200 ${
              isOn ? 'translate-x-6' : ''
            }`}
          />
        </button>
        <span className={`${isOn && "font-semibold"}`} >Show only incompleted todos</span>
      </div>
      
    <div className='flex flex-col gap-3'>
      { isOn && cts.map(c=>{

        return <div key={c.id} className={` h-10 w-full p-1 mt-2 rounded-md text-left flex items-center gap-2 border-1 border-black justify-between ${c.completed ? "bg-green-400":"bg-pink-300"}`}>
          <div className={`text-left flex items-center gap-2 `}>
          <input className='m-1 h-4 w-4 p-1 rounded-4xl border-2 border-black' checked={c.completed} onChange={()=>handlecb(c.id)} type="checkbox"
          />
          {c.todo}
          </div>
          <div className='flex gap-8'>
            <span onClick={()=>handleEdit(c.id)} ><svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 border border-black rounded-sm' height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></span>
            <span onClick={()=>handleDelete(c.id)} ><svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 border border-black rounded-sm' height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></span>
          </div>
      </div>
      })}
       {isOn===false && todos.map(x=>{
        
      return <div key={x.id} className={` h-10 w-full p-1 mt-2 rounded-md text-left flex items-center gap-2 border-1 border-black justify-between ${x.completed ? "bg-green-400":"bg-pink-300"}`}>
          <div className={`text-left flex items-center gap-2 `}>
          <input className='m-1 h-4 w-4 p-1 rounded-4xl border-2 border-black' checked={x.completed} onChange={()=>handlecb(x.id)} type="checkbox"
          />
          {x.todo}
          </div>
          <div className='flex gap-8'>
            <span onClick={()=>handleEdit(x.id)} ><svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 border border-black rounded-sm' height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></span>
            <span onClick={()=>handleDelete(x.id)} ><svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 border border-black rounded-sm' height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></span>
          </div>
      </div>
     })}
    </div>
    </div>
}

export default Todo
