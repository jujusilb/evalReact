import React, { useCallback, useState } from 'react';
import Presentation from './affichage/presentation';
import FetchLevels from './api/Fetch_levels.jsx';
import { Route, Routes } from 'react-router-dom'
import Labyrinthe from './affichage/labyrinthe.jsx';

function App() {
  const [levelData, setLevelData] =useState(null)
  const [niveau, setNiveau] = useState(1);
  const handleLevelLoaded = useCallback((data) =>{
    setLevelData(data);
  }, [])
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Presentation/>}/>
          <Route path="/labyrinthe/:niveau" element={<Labyrinthe/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
