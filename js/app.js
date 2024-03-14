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
                //stabiliamo la dimensione della tabella
                let size
                if(difficultSelector === 10){ size = 100}
                else if(difficultSelector === 9){size = 81}
                else if(difficultSelector === 7){size = 49}
                // console.log(size)

        const gridCells = document.querySelector(".grid-wrapper");
                //resettiamo la tabella
                gridCells.innerHTML = " ";

                //generiamo le bombe da inserire nella tabella
                let cellBomb = generateRandomBombs(size); //array di 16 numeri random
                console.log(cellBomb)

                //generiamo la tabella
                for(let i = 0; i < size; i++){
                //numeriamo le caselle
                    let cellNumber = i + 1; //1-100 number
                    // console.log(cellNumber)


                    const cell = document.createElement("div");

                        cell.classList.add("cell");
                        cell.classList.add(`cell-${size}`)

                        cell.innerHTML = cellNumber;

                    gridCells.append(cell);

                    cell.addEventListener("click", function(){
                        
                        if(cellBomb.includes(cellNumber) === true){
                            cell.classList.add("bg-booom")
                        }
                        else{
                            cell.classList.add("bg-selected") //Se vogliamo che la casella una volta ottenuto il bg non possa perderlo
                            // cell.classList.toggle("bg-selected") //se vogliamo che una volta "selezionata" la casella possiamo "deselezionarla"
                            console.log(`Hai selezionato la casella numero: "${cellNumber}"`)
                        }
                    })
                }
    }
    else {
        // console.log("scegli la difficoltà!")
        alert("Scegli la difficoltà!")
    }
}





//CREA UNA FUNZIONE CHE GENERI 16 NUMERI (CELL) CASUALI E UNICI, COMPRESI NEL NUMERO DI CASELLE DELLA GRIGLIA
    //stabilisci un massimo (che inseriremo) e un minimo

function generateRandomBombs(maxBombs){
    let max = maxBombs;
    const min = 1;
    //dichiara un array in cui inserire le bombe generate
    let totalBombs = []
    //crea un ciclo che si ripete 16 volte in cui generi un numero casuale
    while(totalBombs.length < 16){
        
        let bombs = Math.floor(Math.random() * max) + min;
    //se il numero generato è diverso da quelli generati in precedenza, fai push nell'array
        if(totalBombs.includes(bombs) === false){
            totalBombs.push(bombs)
        }
    //quando avremo generato 16 numeri randomici estraiamo il risultato dalla funzione
        if(totalBombs.length === 16){
            return totalBombs
        }
    }
}

