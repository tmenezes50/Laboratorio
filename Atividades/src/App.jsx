import { useState } from "react";



function App() {
  //State
  const [message, setMessage] = useState("Olá mundo!");
  return(
    <div>
      <h1>{message}</h1>
      <button onClick={() => {
        setMessage("olá, fui clicado!");
      }}
      >
        Mudar mensagem
        </button>
    </div>
  )
}

export default App;