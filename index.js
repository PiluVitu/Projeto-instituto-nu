const h2 = document.querySelector('.subTitle')
const input = document.querySelector('#nome')
const primaryButton = document.querySelector('.primary')
const secondaryButton = document.querySelector('.secondary')
const activeButton = document.querySelector('.miniForm button')

primaryButton.addEventListener('click', helloPersonal)
secondaryButton.addEventListener('click', returnDefault)
document.addEventListener('keypress', keyPress => {
  if (keyPress.key === 'Enter') {
    if (primaryButton.classList.contains('hide')) {
      secondaryButton.click()
    } else {
      primaryButton.click()
    }
  }
})


function helloPersonal() {
  const inputName = input.value

  if (inputName !== undefined && inputName !== '') {
    h2.innerText = `Bem vindo(a), ${inputName}`
    h2.classList.toggle('hide')
    input.classList.toggle('hide')
    primaryButton.classList.toggle('hide')
    secondaryButton.classList.toggle('hide')
  } else {
    alert('Digite seu nome no campo de texto')
  }
}

function returnDefault() {
  input.value = ''
  h2.classList.toggle('hide')
  input.classList.toggle('hide')
  primaryButton.classList.toggle('hide')
  secondaryButton.classList.toggle('hide')
}
