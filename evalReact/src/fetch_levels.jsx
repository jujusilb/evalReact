import AffichageGrid from "./affichage_grid";
import {useState, useEffect} from 'react'

function FetchLevels({niveau}){
    const [data, setData] = useState(null)

    useEffect(()=>{
        async function fetchData(){
            console.log("niveau", niveau.niveau);
            let url = "http://localhost:4000/api/levels/" + niveau.niveau;
            let response = await fetch(url);
            let asyncData =await response.json();
            setData(asyncData)
            console.log("data")
            console.log(data);
        }
        fetchData();
    }, [niveau]);
    return (
    <>
        <p>niveau chargé !</p>
        <table id="tableau">
                <AffichageGrid data={data}/>
        </table>
    </>
  );
}
    
export default FetchLevels