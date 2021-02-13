const telefon = document.getElementById('telefon')
const adresa = document.getElementById('adresa')
const brojCetvrtina = document.getElementById('brojCetvrtina')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
mastDefualt = document.getElementById("mast")
mastDefualt.checked = true

form.addEventListener('submit', (e) => {
  let messages = []
  if (adresa.value.length === 0 || adresa.value == null) {
    messages.push('Potrebno je uneti adresu.\n')
  }
  if (telefon.value.length === 0 || telefon.value == null) {
    messages.push('Potrebno je uneti telefon.\n')
  }   
  if (brojCetvrtina.value.length === 0 || brojCetvrtina.value == null) {
    messages.push('Potrebno je uneti broj cetvrtina bureka.\n')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(' ')
  }
  else {
    e.preventDefault()
    messages.push("Čika Mile stiže!")
    errorElement.innerText = messages
  }
})