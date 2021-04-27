const openCardButtons = document.querySelectorAll('[data-card-target]')
const closeCardButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openCardButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = document.querySelector(button.dataset.cardTarget)
    openCard(card)
  })
})

overlay.addEventListener('click', () => {
  const cards = document.querySelectorAll('.card.active')
  cards.forEach(card => {
    closeCard(card)
  })
})

closeCardButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card')
    closeCard(card)
  })
})

function openCard(card) {
  if (card == null) return
  card.classList.add('active')
  overlay.classList.add('active')
}

function closeCard(card) {
  if (card == null) return
  card.classList.remove('active')
  overlay.classList.remove('active')
}