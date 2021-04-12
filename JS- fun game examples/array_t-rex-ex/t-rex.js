//LEGEND: 
// 0 - empty
// 1 - t-rex
// 2 - cactus

let gameMap = [0, 2, 0, 1, 0, 0, 0, 0, 0, 2, 2]
let ti = 3
let dir = "left"
        // ti              ^
        // i=  0, 1, 2 ......................9

let score = 0
let health = 0

function drawMap() {
    m.innerHTML = ``
    for(let i= 0; i < gameMap.length; i++) {
       if(gameMap[i] == 0) {
           m.innerHTML += `<div></div>`
       } else if (gameMap[i] == 1) {
        m.innerHTML += `<div class="t-rex ${dir}"></div>`
       } else if (gameMap[i] == 2) {
         m.innerHTML += `<div class="cactus"></div>`
       }
    }


}

drawMap()

function action() {
    switch(event.key){

        case "ArrowLeft": 
        if(ti === 0) {
            gameMap[ti] = 0
        } else {
            gameMap[ti] = 0
            ti --
            gameMap[ti] = 1
    
            dir = "left"
            drawMap()
        }
        
        break

        case "ArrowRight": 
        if(ti === 10) {
          gameMap[ti] = 1
        } else {
        gameMap[ti] = 0
        ti ++
        gameMap[ti] = 1

        dir = "right"
        drawMap()
        }
        break
    }

    
    
    
}



//HW1: finish left movement
//HW2: fix boundaries
//HW3*: score, health points, game over etc
