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
                //Creiamo un contatore di punteggio
                let ptiCounter = 0;
                //generiamo le bombe da inserire nella tabella
                let cellBomb = generateRandomBombs(size); //array di 16 numeri random
                console.log(cellBomb)
                //generiamo la tabella
                for(let i = 0; i < size; i++){
                //numeriamo le caselle
                    let cellNumber = i + 1; //1-100 number
                //creiamo le caselle in html con le rispettive classi
                    let cell = document.createElement("div");
                    divGenerator(cell, gridCells, cellNumber, size)
                //diamo alle caselle un eventListener click che dia un bg differente in base se sono bombe o caselle libere(a ogni casella togliamo il click)
                    cell.addEventListener("click", function(){

                        if(cellBomb.includes(cellNumber) === true){
                            console.log(`Hai perso il tuo punteggio totale è: "${ptiCounter}"`)
                            
                                    cell.classList.add("bg-booom");
                                    cell.classList.add("stop_click");
                        }
                        else{
                            cell.classList.add("stop_click")
                            cell.classList.add("bg-selected") //Se vogliamo che la casella una volta ottenuto il bg non possa perderlo
                            // cell.classList.toggle("bg-selected") //se vogliamo che una volta "selezionata" la casella possiamo "deselezionarla"
                            ptiCounter++
                            console.log(`Hai selezionato la casella numero: "${cellNumber}"`)
                            console.log(`Il tuo punteggio è: "${ptiCounter}"`)
                            if(ptiCounter === (size - 16)){
                    
                                console.log(`Hai vinto!!! Il tuo punteggio totale è: "${ptiCounter}"`)
                            }
                        }
                    })
                }
    }
    else {
        // console.log("scegli la difficoltà!")
        alert("Scegli la difficoltà!")
    }
}










function divGenerator(divElement, appendElement, innerElement, sizeClass){

            divElement.classList.add("cell");
            divElement.classList.add(`cell-${sizeClass}`)
                        
            divElement.innerHTML = innerElement;

            appendElement.append(divElement);

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

























