import AffichageGrid from './affichage_grid'


function moving(e){
let curseur={
        x:0,
        y:0
    }
    let x=curseur.x
    let y=curseur.y
    let maxX =grille.rows.length
    let maxY =grille.length
    useEffect(()=>{
        function traitement(){
            switch(e.key){
                case 'z':
                    if (y>0) y--;
                case 'q':
                    if(x>0) x--;
                case 's':
                    if(y < maxY) y++;
                case 'd':
                    if (x <maxX) x++;
            }
            curseur.x =x
            curseur.y =y
            
        }, traitement()
    }, [e]);
    return grille.row[curseur.x].cell[curseurx].classList.add("player")
    
}

export default moving