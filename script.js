let text = document.getElementsByClassName("text")[0]
let blink = document.getElementsByClassName("blink")[0]
let texts = ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Python', 'ReactJS', 'NodeJS', 'ExpressJS', 'Artificial Intelligence', 'Machine Learning']

// Blinking cursor
let blinkFunc = ()=>{
    blinking = setInterval(()=>{
        blink.classList.toggle("display-none")
    }, 350)
}

// Removing Text

let removingTextFunc = ()=>{
    clearInterval(blinking)
    let removingCounter = text.innerText.length-1
    let removingTextInt = setInterval(()=>{
        text.innerText = text.innerText.slice(0, removingCounter-1)
        if(removingCounter == 0){
            clearInterval(removingTextInt)
            removedElement = texts.shift()
            texts.push(removedElement)
            setTimeout(()=>{

                addingTextFunc()
            }, 20)
        }
        removingCounter -= 1

    },50)


    
}


// Adding text 

addingTextFunc = ()=>{
    let addingCounter = 0
    let wordCounter = 0
    
    let addingTextInt = setInterval(()=>{
        text.innerText = text.innerText + texts[wordCounter].charAt(addingCounter)
        addingCounter += 1
        if(text.innerText == texts[wordCounter]){
            clearInterval(addingTextInt)
            blinkFunc()
            setTimeout(()=>{
                blink.classList.remove("display-none")
                removingTextFunc()
            }, 2000)
        }
    }, 80)
}

addingTextFunc()