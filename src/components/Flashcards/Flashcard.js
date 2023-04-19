import { useState } from "react";
import Card from "../UI/Card";

const Flashcard = ({ flashcard }) => {
  const [cardFlipState, setCardFlipState] = useState(false)
  return (
    <Card>
      <div onClick={()=> setCardFlipState(!cardFlipState)}>
        { cardFlipState ? flashcard.answer : flashcard.question}
      </div>
    </Card>
  )  
}

export default Flashcard
