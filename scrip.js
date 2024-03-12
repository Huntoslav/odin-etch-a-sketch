document.addEventListener("DOMContentLoaded", function(e){



    
    for(let i = 0; i < 16*16; i++){
        let createGrid = document.createElement("div")
        createGrid.classList.add("gridItem")
        document.querySelector(".grid-container").appendChild(createGrid)
    }


    let black = document.querySelector(".black")
    black.addEventListener("click", function(e){
        for(let changeToBlack of document.getElementsByClassName("gridItem")){
            changeToBlack.addEventListener("mouseover", function(e){
                changeToBlack.style.backgroundColor = "black"
            })
        }
    })

    function getRainbow(){
        let r = Math.ceil(Math.random()*255)
        let g = Math.ceil(Math.random()*255)
        let b = Math.ceil(Math.random()*255)
        return`rgb(${r}, ${g}, ${b})`
    }
    console.log(getRainbow())

    let rainbow = document.querySelector(".rainbow")
    rainbow.addEventListener("click", function(e){
        for(let changeToRainbow of document.getElementsByClassName("gridItem")){
            changeToRainbow.addEventListener("mouseover", function(e){
                changeToRainbow.style.backgroundColor = getRainbow()
            })
        }
    })

    let erase = document.querySelector(".erase")
    erase.addEventListener("click", function(e){
        for(let eraseThis of document.getElementsByClassName("gridItem")){
            eraseThis.addEventListener("mouseover", function(e){
                eraseThis.style.backgroundColor = "white"
            })
        }
    })


    let clear = document.querySelector(".clear")
    clear.addEventListener("click", function(e){
        for(let clearAll of document.getElementsByClassName("gridItem")){
            clearAll.style.backgroundColor = "white"
        }
    })
    
    
    let newGrid = document.querySelector("#form")
    newGrid.addEventListener("submit", function(e){
        e.preventDefault()
        console.log(e.target.elements.num.value)
        let result = e.target.elements.num.value
        if(result > 100 || result < 0){
            alert("ENTER 1-100!!!")
            return
        }
        createNewGrid(result)
    })
    
    function createNewGrid(result){
        let newNew = document.querySelector(".grid-container")
        e.preventDefault()
        newNew.innerHTML = ""

        
        for(let i = 0; i < result*result; i++){
            let tadyJeNovejGrid = document.createElement("div")
            tadyJeNovejGrid.classList.add("gridItem")
            tadyJeNovejGrid.style.flex = `0 0 calc(100% / ${result})`;
            newNew.appendChild(tadyJeNovejGrid)

        }
    }

})