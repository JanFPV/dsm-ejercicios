function Result({ valorA, valorB, operacion }) {

  const calcularResultado = () => {
    switch (operacion) {
      case '+':
        return valorA + valorB;
      case '-':
        return valorA - valorB;
      case '*':
        return valorA * valorB;
      case '/':
        if (valorB === 0) return "Math Error";
        return valorA / valorB;
      default:
        return 0;
    }
  }

  return (
    <div className="mt-4">
      <h4 className="text-muted mb-3">Resultado</h4>
      <div className="alert alert-success fs-1 fw-bold py-3 shadow-sm">
        {calcularResultado()}
      </div>
    </div>
  )
}

export default Result