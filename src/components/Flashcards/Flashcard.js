import { useState } from "react";
import Card from "../UI/Card";
import './Flashcard.css'

const Flashcard = ({ flashcard }) => {
  const [cardFlipState, setCardFlipState] = useState(false)
  return (
    <Card>
      <div className={`flashcard ${cardFlipState ? 'flip' : ' '}`} onClick={()=> setCardFlipState(!cardFlipState)}>
        <div className="front">
          {flashcard.question}
        {/* { cardFlipState ? flashcard.answer : flashcard.question} */}
        </div>
        <div className="back">{flashcard.answer}</div>
      </div>
    </Card>
  )  
}

export default Flashcard
