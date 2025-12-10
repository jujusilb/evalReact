//import FetchLevels from './fetch_levels.jsx'
import useMouvement from './services/useMoving.jsx'
import {useState, useEffect} from 'react'
import './affichage_grid.css'
//const {e, setE} = useState(e)
function AffichageGrid({grille}){
    console.log("grille")
    console.log(grille)
    const [currentGrille, handleKeyDown] = useMouvement(grille);
    const getCellClass = (cellValue) =>{
        switch(cellValue){
            case "S":
                return "start"
            case "W":
                return "wall";
            case "P":
                return 'player';
            case "C":
                return "coin";
            case "E":
                return "exit";
            default:
                return "empty";
        }
    }
    return (
        <tbody>
            {grille.map((row, i) => (
                <tr key={i}>
                    {row.map((cell, j) => (
                        <td key={j} className={getCellClass(cell)}>  
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}
export default AffichageGrid

