import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [numero, setNumero] = useState(0);
  const [adivinhar, setAdivinhar]=useState(0);
  const [palpite, setPalpite]=useState(null);
  const [tentativas, setTentativas]=useState(0)
  
  useEffect(()=>{
    gerarNumero()
  },[])
  const gerarNumero = ()=>{
    const aleatorio = Math.floor(Math.random()*100);
    setNumero(aleatorio);
    setTentativas(0);
    setPalpite(null);
    setAdivinhar('');
    console.log(aleatorio);
  }

  const tentarAdivinhar= ()=>{
    if (adivinhar < 0 || adivinhar > 100) {
      alert("Digite um número entre 0 e 100!");
      return;
    }
    setTentativas(tentativas + 1)
    if(adivinhar == numero){
      setPalpite(true);
    }
    else{
      setPalpite(false);
    }
  }


  return (
    <>
      <div className='geral'>
        <div className='jogo'>
          <h1>Jogo de adivinhação</h1>
        
          <input value={adivinhar} type='number' max={100} min={0} onChange={(e)=>setAdivinhar(e.target.value)}/>
          <button onClick={tentarAdivinhar}>Adivinhar</button>
        </div>
        <div className='display'>
          {palpite===null? "Faça um palpite !": palpite?"🎉 Acertou!" : "❌ Errou!"}
        </div>
        <div className='tentativas'>
          <p>🏆 tentativas: {tentativas}</p>
          <button onClick={gerarNumero}>🔄Reiniciar</button>
        </div>
      </div>
    </>
  )
}

export default App
