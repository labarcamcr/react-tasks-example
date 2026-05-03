import TaskCard from './TaskCard'
import { useContext} from 'react'
import { TaskContext} from '../context/TaskContext'

function TaskList() {

  //const valor = useContext(TaskContext)
 // const { tasks,deleteTask } = useContext(TaskContext)
  const { tasks } = useContext(TaskContext)
  

  if (tasks.length === 0 ){
    return <h2 className='text-white text-4xl font-bold text-center' >No hay Tareas</h2>
   }
    

  return (
    <div className='grid grid-cols-4 gap-2 p-4 rounded-md' >
        {
            tasks.map((task) =>(
               <TaskCard key={task.id} task={task}>
               </TaskCard>
            )) 
        }
    </div>
  )
}

export default TaskList