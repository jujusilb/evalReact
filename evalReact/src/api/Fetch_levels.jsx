import {useState, useEffect} from 'react'


function FetchLevels({niveau, onDataLoaded}){

    useEffect(()=>{
        async function fetchData(){
            try{
                console.log("niveau", niveau);
                const url = `http://localhost:4000/api/levels/${niveau}`;
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
    }, [niveau, onDataLoaded]);
        return null;
    
}
    
export default FetchLevels