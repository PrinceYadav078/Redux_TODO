import React, {useState} from 'react'
import "./todo.css"
const Todo = () => {
    const [inputData, setInputData]= useState("")
  return (
    <>
      <div className='main-div '>
      <div className='child-div'>
        <figure>
          <figcaption>Add Your List Here ✌️ </figcaption>
        </figure>

        <div className='addItems'>
          <input type="text" placeholder= "✍️ Add Items.." 
          value={inputData} 
          onChange={(e)=>setInputData(e.target.value)}
          />
          <i className="fa fa-plus add-btn"></i>
        </div>
      </div>
     </div>

    </>
  )
}

export default Todo