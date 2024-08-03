import React, { useState }from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Comics from "./Comics"
import CharacterDetails from "./CharacterDetails"
import BrowseCharacters from "./BrowseCharacters"
import { NotFound } from "./NotFound"
import "./AppStyles.css"; 

function App() {

const [selectedCharacter,  setSelectedCharacter] = useState(null);

const handleCharacterSelect = (character) => {
  setSelectedCharacter(character)
}

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/comics" element={ <Comics/> } />
        <Route path="/character-details/:id" element={selectedCharacter &&
           <CharacterDetails character={selectedCharacter} />} />
        <Route path="/browse-character" element={ <BrowseCharacters onCharacterSelect={handleCharacterSelect} /> } />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
