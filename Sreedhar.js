let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector(".two")
let nwegame=document.querySelector(".three")
let msghide=document.querySelector(".msg")
let four=document.querySelector(".four")


let turnO=true

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turnO=true
    enableboxes()
    msghide.classList.add("hide")

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O"
            turnO=false
        }else{
            box.innerText="X"
            turnO=true

        }
        box.disabled=true

        checkwinner()
    })

})

const disaboxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText="" 
    }
}
const showwinner=(win)=>{
    msghide.innerText=(`Congratulations,winner is : ${win}`)
    msghide.classList.remove("hide")
    disaboxes()
}


const checkwinner=()=>{
    for(pattern of win){
        let thukku=  boxes[pattern[0]].innerText
        let sreedhar= boxes[pattern[1]].innerText
        let harsha= boxes[pattern[2]].innerText
        if(thukku !=""&&sreedhar!=""&&harsha!=""){
            if(thukku===sreedhar&&sreedhar===harsha){
                showwinner(thukku)
            }
        }
    }
}


nwegame.addEventListener("click",resetgame)
resetBtn.addEventListener("click",resetgame)


