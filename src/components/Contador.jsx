import { useState } from 'react'

const Contador = () => {
  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }

  return (
    <section className="card">
      <h2>Contador</h2>
      <p className="contador-texto">Contador: {contador}</p>
      <div className="botones">
        <button type="button" onClick={sumar}>
          Sumar
        </button>
        <button type="button" onClick={restar}>
          Restar
        </button>
      </div>
    </section>
  )
}

export default Contador
