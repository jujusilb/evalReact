import AffichageGrid from '../affichage_grid'
import { useState, useEffect } from 'react'

const useMouvement = (e, grille)=>{
    const [curseur, setCurseur] = useState({x:0, y:0}) 
    const [x, setX]= useState(curseur.x)
    const [y, setY] =useState(curseur.y)
    const [maxX, setMaxX] =useState(grille.rows.length)
    cosnnst[maxY, setMaxY] =useState(grille.length)    

        useEffect(()=>{
            function traitement(){
                switch(e.key){
                    case 'z':
                        if (y>0) setY(y--);
                    case 'q':
                        if(x>0) setX(x--);
                    case 's':
                        if(y < maxY) setY(y++);
                    case 'd':
                        if (x <maxX) setX(x++);
                }
                setCurseur({x:x, y:y})
            } traitement()
        }, [e]);
        return grille.row[curseur.x].cell[curseurx].classList.add("player");

    
}
export default useMouvement