import React, { useCallback, useState } from 'react';
import Presentation from './affichage/presentation';
import FetchLevels from './api/Fetch_levels';
import AffichageGrid from './affichage/Affichage_grid';

function App() {
  const [levelData, setLevelData] =useState(null)
  const [niveau, setNiveau] = useState(1);
  const handleLevelLoaded = useCallback((data) =>{
    setLevelData(data);
  }, [])
  return (
    <>
      <div>
        <Presentation />
      </div>
      <div>
        <p>niveau {niveau}</p>
        <FetchLevels 
        niveau ={niveau}
        onDataLoaded={handleLevelLoaded}
        />
        {levelData ? (
          <AffichageGrid
            grille={levelData.grid}/>
        ) : (
          <p>Chargement du niveau {niveau} en attente</p>
        )}
      </div>
    </>
  )
}

export default App
