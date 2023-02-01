
document.addEventListener('DOMContentLoaded', function() {

    // variables
    const formulario = document.querySelector('#formulario');
    const inputEmail = document.querySelector('#email');
    const inputNombre = document.querySelector('#nombre');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const submit = document.querySelector('#submit')


    //Event listeners

    submit.addEventListener('click', e => {
        e.preventDefault()
        submit.style.display = 'none'
        const spinner = document.querySelector('#spinner')
        spinner.style.display = 'inline-block'
        setTimeout(() => {
            spinner.style.display='none'
            mostrarTexto()
        }, 3000);

    })


    function mostrarTexto() {
        const text = document.createElement('p');
        text.textContent = 'Su email ha sido envíado con éxito'
        text.classList.add('texto')

        formulario.appendChild(text);
        setTimeout(() => {
            text.remove()
            submit.style.display = 'block'
        }, 3000);
    }
})