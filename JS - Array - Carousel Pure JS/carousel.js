// OWL, slick....bootstrap
// 1. functions
// 2. events
// 3. array, number, string
//4. if/else, for/while


const IMAGES = [          // why is const in CAPS
    "images/459-800x600.jpeg",    //0
    "images/106-800x600.jpeg",   //1
    "images/152-800x600.jpeg"   //2
]

//from this point carousel will start/ current slide
let currentIndex = 0
const EFFECTS = [
    "animate__zoomIn",
    "animate__fadeInUp",
    "animate__fadeInLeft",
    "animate__fadeInRight",
    "animate__fadeInDown"

]
const TITLES = [
    "Sunny Morning",   //0 
    "Summer Flowers",   //1
    "Violet Days"    //2

]

function showImage( n ) {

    let i = Math.round(Math.random() * 3)

    carouselSlides.innerHTML = 
    `
     <img src="${IMAGES[n]}"
     class="animate__animated ${EFFECTS[i]}"
     />
    `
}

function showTitles( n ) {


    carouselTitles.innerHTML = 
    `
     <h4 class="animate__animated animate__fadeIn">${TITLES[n]}</h4>
    `
}

function showIndicators( n ) {
    carouselIndicators.innerHTML = ` `

    for(let i=0; i < IMAGES.length; i++) {
        if(i == n) {
            carouselIndicators.innerHTML += `<i class="fas fa-circle"></i>`
        } else {
            carouselIndicators.innerHTML += `<i class="far fa-circle"></i>`
        }
        
    }
}



function prevK() {
    switch(event.key) {
        case "ArrowLeft": {
         if(currentIndex == 0) {
              currentIndex = ( currentIndex + 2 )
            } else { 
             currentIndex--
            }
        } break

    }
    
    showTitles(currentIndex)
    showImage(currentIndex)
    showIndicators(currentIndex)
}

function prev() {
    if(currentIndex == 0) {
       currentIndex = ( currentIndex + 2 )
    } else {
        currentIndex--
    }

    showTitles(currentIndex)
    showImage(currentIndex)
    showIndicators(currentIndex)
}

function nextK() {
    switch(event.key) {
        case "ArrowRight": {
            if(currentIndex === 2 ) {
                currentIndex -= currentIndex 
            } else {
                currentIndex++
            }
        } break

    }

    showTitles(currentIndex)
    showImage(currentIndex)
    showIndicators(currentIndex)
}


function next() {
    if(currentIndex === 2 ){
        currentIndex -= currentIndex 
    } else {
        currentIndex++
    }
    

    showTitles(currentIndex)
    showImage(currentIndex)
    showIndicators(currentIndex)
}



showImage(currentIndex)
showTitles(currentIndex)
showIndicators(currentIndex)



function play() {
    setInterval(next , 3000)
}




// -- HW1: const naming in CAPS - see notes.md
//HW2: --  boundaries if/else stop or continuous movement  - continuous movment between the 3 
// ** optimize code in next function
// currentIndex++
// showImage(currentIndex)

//HW3: -- create prev function 
//HW4** -- style the next/prev button
//HW5** -- style carousel
// HW6** -- add effects for titles  - added animate__fadeInDown
//HW7** keyboard enabled carousel
