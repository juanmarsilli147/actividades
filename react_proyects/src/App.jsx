import './App.css'
import TaskList from '../components/TaskList'
import TarjetaUsuario from "./TarjetaUsuario";

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

  return (
    <div>
      <h1>Usuarios</h1>

      <TarjetaUsuario
        nombre="María López"
        correo="maria@example.com"
        edad={28}
        enLinea={true}
      />

      <TarjetaUsuario
        nombre="Carlos Pérez"
        correo="carlos@example.com"
        edad={35}
        enLinea={false}
      />
    </div>
  );
}

export default App;



