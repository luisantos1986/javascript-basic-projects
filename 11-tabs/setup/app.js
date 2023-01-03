const btns = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.content')

btns.forEach(function(btn) {
    btn.addEventListener('click', function(){
        quitarActive()
        btn.classList.add('active')
        const id = btn.getAttribute('data-id')
        const content = document.getElementById(id)
        content.classList.add('active')
    })
})

function quitarActive() {
    btns.forEach(function(btn) {
        btn.classList.remove('active')
    })
    contents.forEach(function(content) {
        content.classList.remove('active')
    })
}