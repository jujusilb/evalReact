import AffichageGrid from "./affichage_grid";
import {useState, useEffect} from 'react'


function FetchLevels({niveau}){
    const [data, setData] = useState(null)
//    const [niveau, setNiveau] = useState(1)
    useEffect(()=>{
        async function fetchData(){
            console.log("niveau", niveau);
            const url = `http://localhost:4000/api/levels/1`;
            console.log("url", url);
            let response = await fetch(url);
            let asyncData =await response.json();
            console.log("asyncData");
            console.log(asyncData);
            setData(asyncData);
            console.log("data");
            console.log(data);
        }
        fetchData();
    }, [niveau]);
        return (
            <>
                <p>niveau chargé !</p>
                {data && (
                <table id="tableau">
                    <AffichageGrid grille={data.grid}/>
                </table>
                )}

            </>
        );
    
}
    
export default FetchLevels