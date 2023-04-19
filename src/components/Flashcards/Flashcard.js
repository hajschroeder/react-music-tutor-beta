import { useState } from "react";

const Flashcard = ({ flashcard }) => {
  const [cardFlipState, setCardFlipState] = useState(false)
  return (
    <div onClick={()=> setCardFlipState(!cardFlipState)}>
      { cardFlipState ? flashcard.answer : flashcard.question}
    </div>
  )  
}

export default Flashcard
