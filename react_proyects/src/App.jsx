import './MisComponentes.css'
import TaskList from '../components/TaskList'
import Producto from '../components/Producto'

function App() {
  const tareas = [
    { id: 1, title:"aprender express", completed:true },
    { id: 2, title:"aprender react", completed:true },
    { id: 3, title:"aprender react avanzado", completed:false },
    { id: 3, title:"aprender base de datos no relacionales", completed:false }
  ]

  return (
    <>
      <h1>Ejercicio 2</h1>
      <TaskList tasks={tareas}/>
      <h1>Ejercicio 3</h1>
      <Producto
        name="Zapatillas Nike"
        price={12000}
        discount={20}
        category="Calzado"
      />
    </>
  )
}

export default App
