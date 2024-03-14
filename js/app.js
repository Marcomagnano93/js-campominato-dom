//CREA LE CASELLE ALL'INTERNO DI "grid-wrapper"
//--USA UN CICLO FOR PER GENERARE DEGLI OGGETTI "DIV"
//----seleziona il contenitore dove creare le caselle
//----dichiara il numero di caselle che vuoi creare in una costante
//----avvia il ciclo for in relazione al numero di caselle(.length) che vuoi creare
//----dichiara una variabile che conti il ciclo (sarà il numero di ogni casella)
//--ASSEGNA AGLI ELEMENTI "DIV" LA CLASSE ".CELL"
//DAI UN EVENTLISTENER ("CLICK") ALLE CASELLE CHE CAMBI IL LORO COLORE
//--AL CLICK SULLA CASELLA (DIV.CELL) ASSEGNAMO LA CLASSE CON IL BG-COLOR
//--USA .TOGLE PER FAR SI CHE LA CLASSE VENGA AGGIUNTA SOLO SE NON E' GIà PRESENTE
//INSERISCI TUTTO SOTTO L'EVENT LISTENER CLICK SUL BOTTONE

const gameStarter = document.getElementById("starter");


    gameStarter.addEventListener("click", startGame);

function startGame () {

        
    const difficultSelector = parseInt(document.getElementById("difficult").value);

    if (difficultSelector === 10 || difficultSelector === 9 || difficultSelector === 7){

        const gridCells = document.querySelector(".grid-wrapper");

                gridCells.innerHTML = " ";

                const cells = difficultSelector ** 2; //number

                for(let i = 0; i < cells; i++){

                    let cellNumber = i + 1; //1-100 number
                    // console.log(cellNumber)

                    const cell = document.createElement("div");

                        cell.classList.add("cell");
                        cell.classList.add(`cell-${difficultSelector}`)

                        cell.innerHTML = cellNumber;

                    gridCells.append(cell);

                    cell.addEventListener("click", function(){

                        cell.classList.add("bg-selected") //Se vogliamo che la casella una volta ottenuto il bg non possa perderlo
                        // cell.classList.toggle("bg-selected") //se vogliamo che una volta "selezionata" la casella possiamo "deselezionarla"
                        console.log(`Hai selezionato la casella numero: "${cellNumber}"`)

                    })
                }
    }
    else {
        // console.log("scegli la difficoltà!")
        alert("Scegli la difficoltà!")
    }
    
}