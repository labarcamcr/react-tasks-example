import TaskList from './components/TaskList'
import TaskForm from  './components/TaskForm' 

import {useState,useEffect } from 'react'

function App() {
  return (
    <main className='bg-slate-700 h-screen' >
      <div className='container mx-auto p-10 ' >
        <TaskForm></TaskForm>
        <TaskList></TaskList>
      </div>
      
    </main>
  )
}

export default App

