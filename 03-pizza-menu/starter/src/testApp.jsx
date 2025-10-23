import { useEffect, useState } from "react"
import OtherApp from "./OtherApp";

function App() {
  const [timer, setTimer] = useState(3);
  const [dice, rollDice] = useState(null);

  useEffect(function(){
    if (timer === 0) {
      setTimer(3);
      const randomDice = Math.floor(Math.random() * 6) + 1;
      rollDice(randomDice);
      return;
    }

    const si = setInterval(function(){
      setTimer(() => timer - 1)
    }, 1000);
    
    return () => clearInterval(si);

  }, [timer]);

  return (
    <div>
      <h1>Rolling Dice in {timer}...</h1>
      <OtherApp props={dice} />
    </div>
  )
}

export default App;