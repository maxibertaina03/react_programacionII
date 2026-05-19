import { useState } from 'react'

const Formulario = () => {
  const [texto, setTexto] = useState('')

  const manejarCambio = (evento) => {
    setTexto(evento.target.value)
  }

  return (
    <section className="card">
      <h2>Formulario</h2>
      <input
        type="text"
        placeholder="Escribe algo"
        value={texto}
        onChange={manejarCambio}
      />
      <p>Texto ingresado: {texto}</p>
    </section>
  )
}

export default Formulario
