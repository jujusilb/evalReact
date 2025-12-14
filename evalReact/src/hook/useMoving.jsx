//import AffichageGrid from '../affichage/affichage_grid'
import { useState, useEffect, useCallback} from 'react'

const useMouvement = (grille)=>{
    console.log('IN USEMOUVEMENT')

    if (!grille || !grille.length || !grille[0]?.length) {
        return { x: 0, y: 0 };
    }

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
    const handleKeyDown= useCallback((event) =>{
        console.log(`vous avez tapé ${event.key}`)
        
        function checkMove(targetX, targetY){
            if (targetX < 0 || targetX >= maxX || targetY < 0 || targetY >= maxY) {
                return false;
            }
            if (grille[targetY][targetX] === 'W') {
            return false;
            }
            if (grille[targetY][targetX] === 'E') {
                
                return true;
            }
            return true;

        }

        switch(event.key){
            case 'z':
                if (checkMove(x, y - 1)) {
                    setY(prevY => prevY - 1);
                }
                break;
            case 'q':
                if (checkMove(x - 1, y)) {
                    setX(prevX => prevX - 1);
                }
                break;
            case 's':
                if (checkMove(x, y + 1)) {
                    setY(prevY => prevY + 1);
                }
                break;
            case 'd':
                if (checkMove(x + 1, y)) {
                    setX(prevX => prevX + 1);
                }
                break; 
        }
    }, [x, maxX, y, maxY, grille])
    useEffect(()=>{            
        window.addEventListener("keydown", handleKeyDown)
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [handleKeyDown, x,  maxX, y, maxY, grille]);        
    return {x, y}
}
export default useMouvement