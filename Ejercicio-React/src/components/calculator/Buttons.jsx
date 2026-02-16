function Buttons({ operacion, setOperacion }) {

  const getClass = (op) => {
    if (operacion === op) {
      return "btn btn-primary px-4 fs-4 fw-bold shadow";
    } else {
      return "btn btn-outline-primary px-4 fs-4 fw-bold";
    }
  }

  return (
    <div className="d-flex justify-content-center gap-3 mb-4">
      <button
        className={getClass('+')}
        onClick={() => setOperacion('+')}
      >
        +
      </button>

      <button
        className={getClass('-')}
        onClick={() => setOperacion('-')}
      >
        −
      </button>

      <button
        className={getClass('*')}
        onClick={() => setOperacion('*')}
      >
        ×
      </button>

      <button
        className={getClass('/')}
        onClick={() => setOperacion('/')}
      >
        ÷
      </button>
    </div>
  )
}

export default Buttons