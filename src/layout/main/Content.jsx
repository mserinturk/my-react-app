import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Icon from '../../components/icon'

function Content() {

  const [todos, setTodos] = useState([])
  const [todo, setNewTodo] = useState('')
  const [editTodo, setTodo] = useState('')
  const [editable, setEditable] = useState(false)

  const createTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 999999999),
      content: todo
    }
    setTodos([...todos, newTodo])
    setNewTodo('')
  }

  const deleteTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id != id)])
  }
  
  return (
    <div className="h-full p-5 flex flex-col items-center justify-center space-y-6">

      <div className='flex flex-col !space-y-3 h-32 w-96 mb-6'>
        <TextField id="outlined-basic" label="Task Name" variant="outlined" value={todo} onChange={(e) => setNewTodo(e.target.value)} />
        <Button size="large" variant="contained" onClick={createTodo}>Create Task</Button>
      </div>
      <div className="h-full w-full p-5">
        <h2 className="font-medium text-lg mb-5 border-b border-gray-100 pb-5">Task List</h2>
        <div className="grid grid-cols-3 gap-6">
          {todos.map((todo) => (
            <div key={todo.id} className="border border-gray-300 rounded-lg flex items-center w-full p-3">
              <div className="flex-1 text-sm">
                { editable ? <TextField id="outlined-basic" label="Task Name" variant="outlined" value={editTodo} onChange={(e) => setTodo(e.target.value)} /> : todo.content }
              </div>
              <div className="flex space-x-3">
                <Icon name="xmark" type="light" onClick={() => deleteTask(todo.id)}></Icon>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Content