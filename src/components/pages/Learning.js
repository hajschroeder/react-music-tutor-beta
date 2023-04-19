import { useState } from "react"
import Flashcards from "../Flashcards/Flashcards"

const Learning = () => {
  const DUMMY_CARDS =[
    {
      cardNumber: 1,
      question: 'question',
      answer: 'answer',
    }  
  ]
  const [flashCardState, setFlashCardState] = useState(DUMMY_CARDS)
  return (
    <div>
      <Flashcards flashcards={flashCardState} />
      <h2>Learning placeholder</h2>
    </div>
  )
}

export default Learning