import useMouvement from '../hook/useMoving'
import '../css/affichage_grid.css'
function AffichageGrid({grille}){
    console.log("IN AFFICHAGEGRID")
    const {x, y} =useMouvement(grille)
    console.log("grille")
    console.log(grille)
    console.log("x, y")
    console.log(x, y)

    const playerPlayground =grille.map((row, rowIndex)=>
        row.map((cell, colIndex)=>{
            if (rowIndex===y && colIndex ===x){
                return 'P';
            } else return cell;
        }))




    
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
    if (!grille || !grille.length) {
        return <p>Grille invalide</p>;
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                    </tr>
                    {playerPlayground.map((row, i) => (
                        <tr key={i}>
                            {row.map(
                                (cell, j) => (
                                    <td key={j} aria-live='polite' className={getCellClass(cell)}>
                                        {cell   }
                                    </td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        
        </>
    );
    }
export default AffichageGrid