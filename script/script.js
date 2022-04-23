const button = document.querySelector('button')
const body = document.querySelector('body')

button.addEventListener('click', e => {
   button.innerText === 'DARK theme'
      ? (button.innerText = 'LIGHT theme')
      : (button.innerText = 'DARK theme')
   button.classList.toggle('dark')
   body.classList.toggle('dark')
})
