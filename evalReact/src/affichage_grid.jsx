function AffichageGrid(data){
    let grid = data.grid;
    console.log("grid")
    console.log(grid)
    let grille =document.getElementById("tableau")
    console.log("grille")
    console.log(grille)
    for (let i=0;i<grid.length;i++){
        let tr=document.createElement("tr")
        console.log("i, tr");
        console.log(i, tr);
        grille.append(tr);
        for(let j=0;j<grid[i].length;j++){
            let td  =document.createElement("td")
            console.log("i, td")
            console.log(j, td)
            tr.append(td)
            grille.rows[i].cells[j].innerHTML=grid[i][j]
            console.log(grille.rows[i].cells[j].innerHTML=grid[i][j])
        }
    }
    return (
        <AffichageGrid data={data}/>
    )
}
export default AffichageGrid