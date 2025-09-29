import './App.css'
<<<<<<< HEAD
import TarjetaUsuario from "./TarjetaUsuario";
=======
import TaskList from '../components/TaskList'
>>>>>>> 95975ea217849967e1f9fafbd240d04a9d4b11b8

function App() {
  const tareas = [
    { id: 1, title:"aprender express", completed:true },
    { id: 2, title:"aprender react", completed:true },
    { id: 3, title:"aprender react avanzado", completed:false },
    { id: 3, title:"aprender base de datos no relacionales", completed:false }
  ]

  return (
    <>
<<<<<<< HEAD
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

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
=======
      <TaskList tasks={tareas}/>
>>>>>>> 95975ea217849967e1f9fafbd240d04a9d4b11b8
    </>
  )
}

export default App;