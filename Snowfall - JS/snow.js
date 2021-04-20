const N_FLAKES = 100
let flakes_x = []  //array of numbers x coordinate
let flakes_y = []   //array of numbers y coordinate
let fallStatus = false



function generateCoords() {
    for(let i = 0; i < N_FLAKES; i++) {
        flakes_x[i] = parseInt( Math.random() * 1300 )
        flakes_y[i] = -parseInt( Math.random() * 800 )
        
    }
}

// Ca functia noastra sa lucreze cu mai multi fulti, ii dam un argument i
//ca sa obtinem mai multi flakes adaugam + inainte de egal 
function drawFlake( i ) {
    snowContainer.innerHTML += ` 
        <div 
            class="flake"
            style="
             left: ${flakes_x[i]}px;
             top: ${flakes_y[i]}px
            "
        >
        </div>

    
    `

    
} 


function drawAllFlakes() {
   snowContainer.innerHTML = ``
   for(let i = 0; i < N_FLAKES; i++) {
       drawFlake(i)
   }
}

function fall() {
    for(let i = 0; i < N_FLAKES; i++) {
        flakes_y[i] += 2
        if(flakes_y[i]>800) {
            flakes_y[i] = -parseInt( Math.random() * 800 )
        }
        //daca flakes_y ii mai mic de 500, plaseaza randomly in sus
    }
    drawAllFlakes()
}

// in consola daca apelam Fall() nu se vede miscare, dar daca apoi apelam drawAllFlakes() vom observa cum se misca fulgii in jos
generateCoords()
drawAllFlakes()

function stop() {
   if(fallStatus) {
    fallStatus = false
    fallTimer = setInterval(fall, 20)
    
   } else {
    fallStatus = true
    clearInterval(fallTimer)
   }
        
    
}

let fallTimer = setInterval(fall, 20)



//cream un timer care va face ca la fiecare secunda va face fulgii sa cada jos
// ciclu va intra iterativ prin fiecare coordonata Y si va mari cu un pixel sau cu 10px depinde cat de repede vrem sa cada
//marim coordonata si redesenam div-ul ca sa arate miscarea





//HW1: add status variable paauza/play 
//1 click - pauza
// 2 click - play / true/false / toggle