import React from 'react'
import {useState} from 'react'

const App = () => {
  const[todos, setTodos]=useState([])
  const [input,setInput]=useState('')
  const addTodo = (e) =>{
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

    const deleteTodo = (index) => {
      let newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
   };

  
  return (
    <><h1 className='flex justify-center text-center font-bold text-2xl '>ToDo List</h1>
    <form onSubmit={addTodo}>
       <div className='flex justify-center'>
      <input className='bg-gray-100 mt-5 text-lg' type="text"placeholder='Add a task'value={input} onChange={(e)=> setInput(e.target.value)}/> <button className=' h-7 bg-purple-300 mt-5 w-10 ml-2' type='submit'>Add</button>
    </div>
    </form>
    <ul className='flex mt-6 justify-center '>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
             <button className='ml-12  ' onClick={() => deleteTodo(index)}>Delete</button>
           
          </li>
        ))}
      </ul>
    
    </>
  )
}

export default App