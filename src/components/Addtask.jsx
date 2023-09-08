import React from 'react'
import { useState } from 'react'

const Addtask = ({onAdd}) => {

     const [text, setText]=useState('')

     const onSubmit=(e)=>{
       e.preventDefault()
       if(!text){
        alert('Textee oruulna uu')
       }
       else{
        onAdd(text)
       }
       setText('')
     }
  return <form className='add-form' onSubmit={onSubmit}>
<div className='form-control'>
    <label>AddTask</label>
    <input type="text" placeholder='Add Task' value={text} onChange={(e)=>{setText(e.target.value)}} />
</div>
<input type="submit" className='btn-block btn' value='Save task'/>
    </form>
  
}

export default Addtask