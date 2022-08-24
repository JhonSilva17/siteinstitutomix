// Menu mobile
function menuMobile() {
    const menu = document.querySelector('#menujs')
    const icons = document.querySelectorAll('.icon')
    const menuClass = 'ativo'
    
    icons.forEach(item => {
        item.addEventListener('click', ()=> {
            menu.classList.toggle(menuClass)
        })
    })
    
}
menuMobile()

// quando rolar a página o menu se torna fixo
function surgirMenu() {
    const header = document.querySelector('header')
    const hero = document.querySelector('#intro')
    const heroBottom = hero.getBoundingClientRect().bottom;

    console.log(heroBottom)
    if (heroBottom < 20) {
        header.classList.add('ativo')
    } else {
        header.classList.remove('ativo')
    }
}    

window.addEventListener('scroll', surgirMenu)