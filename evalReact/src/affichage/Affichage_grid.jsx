import vocals from '../tools/vocals'
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
                    {playerPlayground.map((row, i) => (
                        <tr key={i}>
                            {row.map(
                                (cell, j) => (
                                    <td key={j} aria-live='polite' className={getCellClass(cell)}>
                                    
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