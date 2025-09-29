import './App.css'
import TaskList from '../components/TaskList'

function App() {
  const tareas = [
    { id: 1, title:"aprender express", completed:true },
    { id: 2, title:"aprender react", completed:true },
    { id: 3, title:"aprender react avanzado", completed:false },
    { id: 3, title:"aprender base de datos no relacionales", completed:false }
  ]

  return (
    <>
      <TaskList tasks={tareas}/>
    </>
  )
}

export default App;