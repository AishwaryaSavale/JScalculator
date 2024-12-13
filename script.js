var screen= document.querySelector('.calculator .screen input')
var actbtn= document.querySelectorAll('.calculator .operation .action button')

actbtn.forEach((button)=>{
    button.addEventListener('click',()=>{
        let prevData = screen.value
        prevData=prevData+button.getAttribute('data-attr').toString()
        screen.value = prevData
    })
})

var numbtn= document.querySelectorAll('.calculator .operation .numbers button')
numbtn.forEach((button)=>{
    button.addEventListener('click',()=>{
        let prevData= screen.value
        prevData=prevData+button.getAttribute('data-attr').toString()
        screen.value=prevData
    })
})

var cbtn=document.querySelector('.calculator .operation .numbers .clear')
var ebtn=document.querySelector('.calculator .operation .numbers .equal')

cbtn.addEventListener('click',()=>{
    screen.value=""
})

ebtn.addEventListener('click',()=>{
    let expression =screen.value
    let result=eval(expression)
    screen.value=result
})

