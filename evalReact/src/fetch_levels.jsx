import AffichageGrid from "./affichage_grid";

async function FetchLevels(niveau){
    console.log("niveau", niveau.niveau);
    let url = "http://localhost:4000/api/levels/" + niveau.niveau;
    let response = await fetch(url);
    let data =await response.json();
    console.log("data")
    console.log(data);
    return (
        <>
           <p>niveau chargé !</p>
           <table id="tableau">
                            <AffichageGrid data={data}/>
           </table>
        </>
    )
}
export default FetchLevels