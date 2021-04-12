//when we declare values before function - all functions will see them
let pac_x = parseInt( 1 + Math.random() * 9 )
let pac_y = parseInt( 1 + Math.random() * 9 )
let coin_x = parseInt( 1 + Math.random() * 9 )
let coin_y = parseInt( 1 + Math.random() * 9 )
let coin_x_1 = parseInt( 1 + Math.random() * 9 )
let coin_y_1 = parseInt( 1 + Math.random() * 9 )
let bomb_x = parseInt( 1 + Math.random() * 9 )
let bomb_y = parseInt( 1 + Math.random() * 9 )
let bomb_x_1 = parseInt( 1 + Math.random() * 9 )
let bomb_y_1 = parseInt( 1 + Math.random() * 9 )

let score = 0
let health = 0

let coin_state = true
let coin_state_1 = true

let bomb_state = true
let bomb_state_1 = true





function action(){
    console.log(event.key)

    switch(event.key) {
        case "ArrowDown":  
          if(pac_y <= 9) {
            pac_y++;
        } else {
            pac_y = 10
        } break

        case "ArrowUp": 
         if (pac_y >= 2) {
            pac_y--
         } else {
             pac_y = 1
         } break //doua intructiuni in acelasi rand se separa cel mai des prin ";"
        
        case "ArrowRight": 
          if (pac_x <= 9) {
            pac_x++
          } else {
              pac_x = 10
        } break

        case "ArrowLeft":  
         if (pac_x >= 2) {
            pac_x--
         } else {
            pac_x = 1
         } break
    }

    if(pac_x == coin_x  && pac_y == coin_y ) {
        score += 10 //interpret as score + 10 coins
        coin_state = false
        
         
    }

    if(pac_x == coin_x_1  && pac_y == coin_y_1 ) {
        score += 10 //interpret as score + 10 coins
       
        coin_state_1 = false
        
         
    }
    

    if(pac_x == bomb_x && pac_y == bomb_y) {
        health -= 5 //interpret as health status - 5 coins
        bomb_state = false
       
       
    }

    if(pac_x == bomb_x_1 && pac_y == bomb_y_1) {
        health -= 5 //interpret as health status - 5 coins
        bomb_state_1 = false
       
    }

   

    renderMap()

   
    

    
}
//funtion will log any keys that the users will press





function renderMap() { 

    gameMap.innerHTML = ``  //curat html ca sa nu deseneze a noua mapa la fiecare key press

    for (let y=1; y<=10; y++) {
        //pentru i=1, i<=100, repeat i until 100 and then print the result
        for( let x=1; x<=10; x++) {

            if (x == pac_x && y == pac_y) {
                gameMap.innerHTML += `<div class="pac">  </div>` 

            } else if (x == coin_x && y == coin_y) {
                 if(coin_state == true) {
                    gameMap.innerHTML += `<div class="coin">  </div>` 
                } else if (coin_state == false) {
                    
                    gameMap.innerHTML += `<div class="">  </div>`
                } 
                    
                
                
            } else if (x == coin_x_1 && y == coin_y_1) {
                if (coin_state_1 == true) {
                    gameMap.innerHTML += `<div class="coin">  </div>`
                } else if (coin_state_1 == false) {
                    gameMap.innerHTML += `<div class="">  </div>`
                }
                
                } else if (x == bomb_x && y == bomb_y) {
                if(bomb_state == true) {
                    gameMap.innerHTML += `<div class="bomb">  </div>`
                } else if (bomb_state == false) {
                    gameMap.innerHTML += `<div class="">  </div>`
                }
               
            } else if (x == bomb_x_1 && y == bomb_y_1) {
                if (bomb_state_1 == true) {
                    gameMap.innerHTML += `<div class="bomb">  </div>`
                } else if (bomb_state_1 == false) {
                    gameMap.innerHTML += `<div class="">  </div>`
                }
                
            } else {
                gameMap.innerHTML += `<div class="">  </div>`
            }
            
        }
    }

    

    gameScore.innerHTML = `Score: ${score}`
    gameHealth.innerHTML = `Health: ${health}`

}

//+= will print multiple divs

//render is a term often utilized in JS which means print

renderMap()




// HW1: add limits (1, 10) to pacman movement - pacman cannot move below the limits, when coordonate = 0 it will stay in position 1
// HW2: add bomb icon, add hp - health points
//  - when pacman intersects with bomb (-20 coins), health points decrease (0-100)
//print health value below

// HW3:  coin_state; bomb_state - true/false < movement 
//        - coin_state; bomb_state will affect > renderMap()

//HW****: add more coins & bombs 2-3 max
//HW****: add randomly coin in cells

//math.random --will give us a random number from 0-1
// parseInt( 1 + math.random() * 9 )
 
