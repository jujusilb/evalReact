import '../css/presentation.css'
import { Link } from 'react-router-dom'
function Presentation(){
    return (
        <div>
            <span className="welcome">Bonjour !</span><br></br>Bienvenu dans mon jeu !
        <br /><br />
        <Link to="/labyrinthe/1" className="btnStart">DEMARRER LE JEU</Link>
        </div>
    )
}

export default Presentation