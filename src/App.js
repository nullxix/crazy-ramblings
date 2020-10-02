import React, {useState} from "react";
import Card from './Card'
import Form from './Form'

function App() {

  const [cards, setCards] = useState(startingData)
  const [newCard, setNewCard] = useState(blankCard)

  function handleChange(event, i){
    const {name, value} = event.target
    setCards(prevState => {
      const newState = [...prevState]
      newState[i] = {
        ...newState[i],
        [name]: value
      }

      return newState
    })
  }

  function handleNewCardChange(event){
      const {name, value} = event.target

      setNewCard(prevState => ({
          ...prevState,
          [name]: value
      }))
  }

  async function handleSubmit(){
    await setCards(prevState => [
      ...prevState,
      newCard
    ])
    setNewCard(blankCard)
  }

  return (
    <div className="app">
      <Form {...newCard} handleChange={handleNewCardChange}/>
      <button onClick={handleSubmit}>New Card!</button>
      {cards.map((card, i) => <Card {...card} handleChange={event => handleChange(e, i)}/>)}
    </div>
  );
}


const blankCard = {
  title: 'Put your title here',
  data: 'put your data here'
}

const startingData = [
  {
    title: 'Bob\'s Burgers',
    data: 'Great prices on food!'
  },
  {
    title: 'Dave\'s Seafood',
    data: 'Sorta okay prices on food'
  }
]

export default App;
