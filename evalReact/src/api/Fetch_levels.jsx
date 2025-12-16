import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

function FetchLevels({niveau:niveau, onDataLoaded}){

        const params = useParams();
        const niveauURL = parseInt(params.niveau, 10);
        const niveauActif = niveauURL || niveauProps
        useEffect(()=>{
        async function fetchData(){
            try{
                console.log("niveau", niveau);
                const url = `http://localhost:4000/api/levels/${niveauActif}`;
                console.log("url", url);
                let response = await fetch(url);
                let asyncData = await response.json();
                console.log("asyncData");
                console.log(asyncData);
                onDataLoaded(asyncData);
            }catch (e) {
                console.log(`le chargement a échouvé. e: ${e}`)
            }
        }
        fetchData();
    }, [niveauActif, onDataLoaded]);
        return null;
    
}
    
export default FetchLevels