import Dog from "./Dog.js"
import dogs from "./data.js"


document.getElementById("like-btn-el").addEventListener("click",handleDecisionBtnsClick)
document.getElementById("reject-btn-el").addEventListener("click", handleDecisionBtnsClick)

let isWaiting = false


function handleDecisionBtnsClick(e){
    if(!isWaiting){
        isWaiting=true
        console.log(e.target.id)
        if(e.target.id === "like-btn-el" || e.target.parentNode.id === "like-btn-el"){
            currentDog.hasBeenLiked = true
            currentDog.getLiked()
        }else {
            currentDog.hasBeenRejected = true
            currentDog.getRejected()
        }
        render()
        setTimeout(()=> {
            changeDog()
            render()
            isWaiting=false
        },1500)
    }
}

function changeDog(){
    if(dogs.length){
        const newDog = new Dog(dogs.shift())
        currentDog = newDog
    }
}

let currentDog = {}

changeDog()

function render(){
    document.getElementById("match").innerHTML = currentDog.getDogHtml()
}

render()