import './App.css'
import Saludo from './components/Saludo'
import Contador from './components/Contador'
import Formulario from './components/Formulario'

const App = () => {
  return (
    <main className="app">
      <h1>Aplicacion React</h1>
      <Saludo nombre="Masita" />
      <Contador />
      <Formulario />
    </main>
  )
}

export default App
