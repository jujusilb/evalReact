import { useParams } from 'react-router-dom'
import FetchLevels from '../api/Fetch_levels'
import AffichageGrid from './affichage_grid'
import { useState, useCallback } from 'react'

function Labyrinthe() {
  const { niveau } = useParams()
  const [grille, setGrille] = useState(null)

  const handleLoaded = useCallback((data) => {
    setGrille(data.grid)
  }, [])

  return (
    <>
      <FetchLevels
        niveau={niveau}
        onDataLoaded={handleLoaded}
      />
      {grille && <AffichageGrid grille={grille} />}
    </>
  )
}

export default Labyrinthe
