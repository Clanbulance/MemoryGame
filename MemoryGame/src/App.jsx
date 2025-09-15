import { useState } from 'react'
import './App.css'
import CardGrid from './components/cardGrid'
import Card from './components/card'
import Header from './components/Header'
import GameEnd from './components/Lost'



function App() {
  const [count, setCount] = useState(0)
  const [maxScore, setMaxScore] = useState(0)
  const [GameStatus, SetGameEnd] = useState("")
 

  function RestartGame() {
    setCount(0);
    SetGameEnd("");
    setCards(shuffleArray(cards.map(card => ({ ...card, status: 'hidden' }))));
    
  }

  

  function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}


  const [cards, setCards] = useState(
    shuffleArray([
      { name: "pokemon", status: "hidden" },
      { name: "yugi", status: "hidden" },
      { name: "naruto", status: "hidden" },
      { name: "onepiece", status: "hidden" },
      { name: "bleach", status: "hidden" },
      { name: "dragonball", status: "hidden" }
    ])
)


function handleCardClick(cardName) {
  console.log(`Card clicked: ${cardName}`);

  const ClickedCard = cards.find(card => card.name === cardName);
  if (ClickedCard.status === 'clicked') {
    console.log("You clicked the same card twice! Game Over.");
    SetGameEnd("lost");
    // Reset game or handle game over logic here
  } else {
    ClickedCard.status = 'clicked';
    console.log(ClickedCard)
    setTimeout(() => {setCards(shuffleArray(cards))}, 300);
    
    setCount(count + 1);

    if (count + 1 > maxScore) {
      setMaxScore(count + 1);
    }
    if (count + 1 === cards.length) {
      SetGameEnd("win");
  }}
  
}
  return (
<>
  {GameStatus === "win" || GameStatus ==="lost" ? (
    <GameEnd RestartGame={RestartGame} GameStatus={GameStatus}/>
  ) : (
    <>
      <Header count={count} maxScore={maxScore} GameEnd={GameEnd} />
      <CardGrid cards={cards} handleCardClick={handleCardClick} />
    </>
  )}
</>
  )
}

export default App
