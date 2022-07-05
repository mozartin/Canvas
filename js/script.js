let btnPlus = document.getElementById('btnPlus')
let btnMinus = document.getElementById('btnMinus')
let outputSize = document.getElementById('outputSize')
let coursor = document.getElementById('coursor')
let color = document.getElementsByClassName('color')
color[0].classList.add('active-color')
let pen = document.getElementById('pen')
let eraser = document.getElementById('eraser')
let trash = document.getElementById('trash')
pen.classList.add('active-btn')
let colorsArr = ['black', 'gray', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
let activeColor = 'black'
let activeWidth = outputSize.innerText
for (let i = 0; i < color.length; i++) {
   // color[i].classList.remove('active-color')
   color[i].style.backgroundColor = colorsArr[i]
   color[i].addEventListener('click', () => {
      for (const iterator of color) {
         iterator.classList.remove('active-color')
      }
      activeColor = colorsArr[i]
      color[i].classList.add('active-color')
      isEraser = false
      eraser.classList.remove('active-btn')
      pen.classList.add('active-btn')
   })
}
let counter = +outputSize.innerText
btnPlus.addEventListener('click', () => {
   if (counter < 30) {
      counter += 1
   }
   outputSize.innerText = counter
   activeWidth = outputSize.innerText
})
btnMinus.addEventListener('click', () => {
   if (counter > 1) {
      counter -= 1
   }
   outputSize.innerText = counter
   activeWidth = outputSize.innerText
})


// window.addEventListener('load', () => {
let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let isPressed = false
let isEraser = false

eraser.addEventListener('click', () => {
   isEraser = true
   eraser.classList.add('active-btn')
   pen.classList.remove('active-btn')
   console.log(isEraser)
   for (const iterator of color) {
      iterator.classList.remove('active-color')
   }
})
pen.addEventListener('click', () => {
   isEraser = false
   eraser.classList.remove('active-btn')
   pen.classList.add('active-btn')
})
trash.addEventListener('click', () => {
   context.clearRect(0, 0, canvas.width, canvas.height)
})
trash.addEventListener('mousedown', () => {
   trash.classList.add('active-btn')
})
trash.addEventListener('mouseup', () => {
   trash.classList.remove('active-btn')
   color[0].classList.add('active-color')
   eraser.classList.remove('active-btn')
   pen.classList.add('active-btn')
   isEraser = false
})
canvas.addEventListener('mousedown', (e) => {
   if (isEraser)
      context.strokeStyle = 'white'
   else
      context.strokeStyle = activeColor

   context.lineWidth = activeWidth
   isPressed = true
   context.beginPath()
   context.moveTo(e.offsetX, e.offsetY)
})
canvas.addEventListener('mousemove', (e) => {
   if (isPressed) {
      context.lineTo(e.offsetX, e.offsetY)
      context.stroke()
   }
   coursor.innerText = `${e.offsetX},${e.offsetY}`

})
canvas.addEventListener('mouseup', () => {
   isPressed = false
   context.closePath()
})
// })