import useMouvement from '../hook/useMoving'
import '../css/affichage_grid.css'
import { useState } from 'react'
function AffichageGrid({grille}){
    console.log("IN AFFICHAGEGRID")
    const {x, y, VisitedPlayground} =useMouvement(grille)
    console.log("grille")
    console.log(grille)
    console.log("x, y")
    console.log(x, y)
    console.log("visitedPlayground")
    console.log(VisitedPlayground)
    //const [VisitedPlayground, setVisitedPlayground] =useState(0)
    //setVisitedPlayground
    
    const playerPlayground =[];
    for(let i=0;i<grille.length;i++){
        playerPlayground[i]=[]
        for(let j=0;j<grille[0].length;j++){
            if (i==y && j==x){
                playerPlayground[i][j]='P';
            } else if(VisitedPlayground[i][j] != null){
                playerPlayground[i][j]= grille[i][j]
            }else playerPlayground[i][j] ='H';
            
        }
    }

    //const playerPlayground =grille.map((row, rowIndex)=>
    //    row.map((cell, colIndex)=>{
    //        if (rowIndex===y && colIndex ===x){
    //            return 'P';
    //        } else {
    //            eturn cell;
    //    }))




    
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
            case "H":
                return "empty";
        }
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