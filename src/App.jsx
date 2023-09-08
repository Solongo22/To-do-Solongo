import React from "react"
import './index.css'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

import { useState } from "react"
import Addtask from "./components/Addtask"

function App() {
  
  const[tasks, setTasks]= useState([
{
    id:1, text:'Read a book',
},
{
    id:2, text:'Go to shopping',
},
{
    id:3, text:'Meet Friends',
},

    ])

    const deleteTasks=(id)=>{
// console.log('delete', id)
setTasks(tasks.filter((task)=>task.id!==id))
    }

    const addTask=(task)=>{
// console.log(task)
const newId=Math.floor(Math.random()*1000000)
const newTask={id:newId, text:task}
setTasks([...tasks,newTask])
    }

  return (
   <div className="container">

    <Header text='To Do ' />
    <Addtask onAdd={addTask} />
    {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTasks}/> : <p className="hudluh" style={{textAlign:'center'}}>Hooson bn</p>}
   </div>
  )
}

export default App
