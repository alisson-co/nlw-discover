import Modal from './modal.js'

const modal = Modal()

const modalTitle = querySelector

//pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => { 
    //adicionar a escuta
    button.addEventListener("click",  event => {
        //abir a modal
        modal.open()
    })
})
//quando botão delete for clicado abrir modal
const deleteButton = document.querySelectorAll(".actions .delete")

deleteButton.forEach(button => {
    button.addEventListener("click", event =>{
        modal.open()
    })
})

//01:30:46