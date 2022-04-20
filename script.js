const button = document.querySelector('button')
const label = document.querySelector('.theme')
const body = document.querySelector('body')

button.addEventListener('click', e => {
   //console.log(button, label)
   label.innerText === 'DARK'
      ? (label.innerText = 'LIGHT')
      : (label.innerText = 'DARK')
   button.classList.toggle('dark')
   body.classList.toggle('dark')
})
