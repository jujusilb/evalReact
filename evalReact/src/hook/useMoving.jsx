//import AffichageGrid from '../affichage/affichage_grid'
import { useState, useEffect, useCallback} from 'react'
import vocals from '../tools/vocals';

const useMouvement = (grille)=>{
    console.log('IN USEMOUVEMENT')

    
   

    const maxX =grille[0].length
    const maxY =grille.length

    const findStart =(grille)=>{
        for (let i=0;i<grille.length;i++){
            for(let j=0;j<grille[0].length;j++){
                if (grille[i][j]==='S'){
                    return {x:j, y:i}
                }
            }
       }return {x: 0, y: 0};
    }
    const startPos =findStart(grille)
    const [x, setX]= useState(startPos.x)
    const [y, setY] =useState(startPos.y)
    const [VisitedPlayground, setVisitedPlayground] =useState(()=>{
        const base = grille.map(row => Array(row.length).fill(null));
        base[startPos.y][startPos.x]=1;
        return base;
    })

    const visitedYet  = useCallback((targetY, targetX) => {

        if (!grille || !grille.length || !grille[0]?.length) return ;
        
        const newVisited = VisitedPlayground.map(
            (row, rIndex) => {
                if (rIndex === targetY) {
                    return row.map(
                        (cell, cIndex) => (
                            cIndex === targetX ? 1 : cell));
            }
            return row;
        });
        setVisitedPlayground(newVisited)
    }, [VisitedPlayground, grille]);

    const handleKeyDown= useCallback((event) =>{
        function checkMove(targetX, targetY){
            if (targetX < 0 || targetX >= maxX || targetY < 0 || targetY >= maxY) {
                vocals("hors limite !")
                return false;
            }
        
            if (grille[targetY][targetX] === 'W') {
                visitedYet(targetY,targetX)
                vocals("Mur !")
                return false;
            }
            if (grille[targetY][targetX] === 'E') {
                vocals("bravo !")
                return true;
            } else checkVocals(targetY, targetX)
            return true;
        }
        function checkVocals(targetY, targetX){
            switch (grille[targetY][targetX]){
                case "S":
                vocals("Départ")
                break;
            case "C":
                vocals("Piece !")
                break;
            case "E":
                vocals("Ennemi !")
                break;
            case "A":
                vocals("Arme !")
                break;
            case "K":
                vocals("Clé !")
                break;
            }
        }
        switch(event.key){
            case 'z':
            case 'ArrowUp':
                if (checkMove(x, y - 1)) { 
                    visitedYet(y, x);
                    setY(prevY => prevY - 1);
                }
                break;
            case 'q':
            case 'ArrowLeft':
                if (checkMove(x - 1, y)) {
                    visitedYet(y, x);
                    setX(prevX => prevX - 1);
                }
                break;
            case 's':
            case 'ArrowDown':
                if (checkMove(x, y + 1)) {
                    visitedYet(y, x);
                    setY(prevY => prevY + 1);
                }
                break;
            case 'd':
            case 'ArrowRight':
                if (checkMove(x + 1, y)) {
                    visitedYet(y, x);
                    setX(prevX => prevX + 1);
                }
                break; 
        }
    }, [visitedYet, VisitedPlayground, x, maxX, y, maxY, grille])
    useEffect(()=>{            
        window.addEventListener("keydown", handleKeyDown)
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [handleKeyDown, x,  maxX, y, maxY, grille]);        
    return {x, y, VisitedPlayground}
}
export default useMouvement