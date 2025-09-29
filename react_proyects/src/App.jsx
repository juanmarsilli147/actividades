import Producto from '../components/Producto';
import TaskList from '../components/TaskList'
import TarjetaUsuario from './TarjetaUsuario'

function App() {
  const tareas = [
    { id: 1, title:"aprender express", completed:true },
    { id: 2, title:"aprender react", completed:true },
    { id: 3, title:"aprender react avanzado", completed:false },
    { id: 3, title:"aprender base de datos no relacionales", completed:false }
  ]

  return (
    <>
      <h1>Ejercicio 1</h1>
      <TarjetaUsuario
      nombre="Roberto"
      correo="robertogmail.com"
      edad={20}
      enLinea={true}/>
      <TarjetaUsuario
      nombre="Alberto"
      correo="albertogmail.com"
      edad={50}
      enLinea={false}/>


      <h1>Ejercicio 2</h1>
      <TaskList tasks={tareas}/>


      <h1>Ejercicio 3</h1>
      <Producto
      name="RTX 5090"
      price={2000000}
      discount={15}
      category="PC"/>
      <Producto
      name="Teclado"
      price={40000}
      discount={7}
      category="Perifericos"/>
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



