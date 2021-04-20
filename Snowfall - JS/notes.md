ASYNCRON FUNCTIONS

-nu noi stabilim exact ordinea in care se vor exectuta
- nu este garantat ca se vor executa intr-o anumita orine
-se pot executa in paralel




EXemple 

function f() {
    console.log("Here")
}

setInterval(f, 500)
setInterval(f, 1000)
     ^
     |
functia f se va executa la intervalul de jumate de secunda si in paralel la fiecare secunda 


