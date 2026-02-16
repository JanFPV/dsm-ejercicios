import { useState } from 'react'
import Inputs from './components/calculator/Inputs'
import Buttons from './components/calculator/Buttons'
import Result from './components/calculator/Result'

function App() {
  const [valorA, setValorA] = useState(0)
  const [valorB, setValorB] = useState(0)
  const [operacion, setOperacion] = useState('+')

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center card shadow-lg p-5 bg-white border-0 rounded-4">
          <h2 className="mb-4 text-primary fw-bold">Calculadora</h2>

          <Inputs
            valorA={valorA}
            setValorA={setValorA}
            valorB={valorB}
            setValorB={setValorB}
          />

          <Buttons
            operacion={operacion}
            setOperacion={setOperacion}
          />

          <Result
            valorA={valorA}
            valorB={valorB}
            operacion={operacion}
          />

        </div>
      </div>
    </div>
  )
}

export default App
