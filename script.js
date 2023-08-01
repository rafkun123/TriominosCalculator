const addPlayer = document.querySelector(".addPlayer")
const newGame = document.querySelector(".newGame")
const playersCount = document.querySelector(".playersCount")
const playerContainer = document.querySelector(".playercontainer")
const players = document.querySelector(".players")
const container = document.querySelector(".container")

AddingPlayer = () => {
    newGame.style.display='none'
    for (let i = 1; i <= playersCount.value; i++){
        players.appendChild(document.createElement("div"))
        // players.lastElementChild.classList.add('player')
        players.lastElementChild.classList.add('player' + [i])
        let player = document.querySelector(".player"+[i])
        player.appendChild(document.createElement("div"))
        player.lastElementChild.classList.add("dot")
        player.appendChild(document.createElement("input"))
        player.appendChild(document.createElement("div"))
        player.lastElementChild.classList.add('lastScore')
        player.lastElementChild.textContent = 0
        player.appendChild(document.createElement("div"))
        player.lastElementChild.classList.add('actuallScore')
        player.lastElementChild.textContent = 0
    }
    players.firstElementChild.firstChild.classList.add('greenDot')
}

addPlayer.addEventListener('click', AddingPlayer)


const dodaj = document.querySelector(".dodaj")
const display = document.querySelector(".display")
const score = document.querySelectorAll('.actuallScore')
const startGame = document.querySelector('.startGame')
const buttons = document.querySelectorAll('button')
// const player = document.querySelectorAll('.player')

Next = () => {
    for (i = 0; i < playersCount.value; i++){
        if (players.children[i].firstElementChild.classList.contains('greenDot')){
            players.children[i].firstElementChild.classList.remove('greenDot')
            players.children[i].lastElementChild.textContent=parseInt(players.children[i].lastElementChild.textContent) + parseInt(display.value)
            players.children[i].lastElementChild.previousElementSibling.textContent = parseInt(display.value)
            display.value=0

            if (i < playersCount.value-1){
                players.children[i+1].firstElementChild.classList.add('greenDot')
                console.log('dodałem');
            } else {
                players.children[0].firstElementChild.classList.add('greenDot')
                console.log('wróciłem');
            } 
            break;
        } 
        else{

        }
    }
}


buttons.forEach(button=>{
    button.addEventListener('click', e =>{
        let showScore = parseInt(display.value)
        if(e.target == buttons[1]){
            display.value = showScore + 1
        } 
        else if(e.target == buttons[2]){
            display.value = showScore + 2
        }
        else if(e.target == buttons[3]){
            display.value = showScore + 3
        }
        else if(e.target == buttons[4]){
            display.value = showScore + 4
        }
        else if(e.target == buttons[5]){
            display.value = showScore + 5
        }
        else if(e.target == buttons[6]){
            display.value = showScore + 25
        }
        else if(e.target == buttons[7]){
            display.value = showScore + 40
        }
        else if(e.target == buttons[8]){
            display.value = showScore + 50
        }
        else if(e.target == buttons[9]){
            display.value = showScore + 60
        }
        else if(e.target == buttons[10]){
            display.value = showScore -5
        }
        else if(e.target == buttons[11]){
            display.value = -25
        }
        else if(e.target == buttons[12]){
            display.value = 0
        }
    })
})

dodaj.addEventListener('click', Next)