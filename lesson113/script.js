const buttonOpen = document.querySelector('.button-open')
const modal = document.querySelector('.modal')
const body = document.body



const closeModul = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}

buttonOpen.addEventListener('click', () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
})

modal.addEventListener('click', (event) => {
    const target = event.target
    
    if (target && target.classList.contains('modal') || target.classList.contains('button-close')) {
        closeModul()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        closeModul()
    }
})