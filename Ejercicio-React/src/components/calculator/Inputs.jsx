function Inputs({ valorA, setValorA, valorB, setValorB }) {
  return (
    <div className="row mb-4">
      <div className="col-6">
        <label className="form-label fw-bold">Valor A</label>
        <input
          type="number"
          className="form-control form-control-lg text-center"
          value={valorA}
          onChange={(e) => setValorA(Number(e.target.value))}
        />
      </div>

      <div className="col-6">
        <label className="form-label fw-bold">Valor B</label>
        <input
          type="number"
          className="form-control form-control-lg text-center"
          value={valorB}
          onChange={(e) => setValorB(Number(e.target.value))}
        />
      </div>
    </div>
  )
}

export default Inputs