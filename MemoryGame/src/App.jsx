import { useState } from 'react'
import './App.css'
import CardGrid from './components/cardGrid'
import Card from './components/card'
import Header from './components/Header'



function App() {
  const [count, setCount] = useState(0)

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
    // Reset game or handle game over logic here
  } else {
    ClickedCard.status = 'clicked';
    console.log(ClickedCard)
    setCards(shuffleArray(cards));
    setCount(count + 1);
  }
  
}
  return (
    <>
      <Header count={count}/>
      <CardGrid cards={cards} handleCardClick={handleCardClick}/>
    </>
  )
}

export default App
