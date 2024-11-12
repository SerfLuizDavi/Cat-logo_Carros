let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let conteiner = document.querySelector('.conteiner')
let itens = conteiner.querySelectorAll('.list .item')
let indicators = document.querySelector('.indicadores')
let dots = indicators.querySelectorAll('ul li')
let list = conteiner.querySelector('.list')

let active = 0

let firstposition = 0

let lastposition = itens.length - 1

function setSlider() {
    let itemold = conteiner.querySelector('.list .item.active')
    itemold.classList.remove('active')

    dotsold = indicators.querySelector('ul li.active')
    dotsold.classList.remove('active')
    dots[active].classList.add('active')

    indicators.querySelector('.numers').innerHTML = '0' + (active + 1)
}


nextButton.onclick = () => {
    list.style.setProperty('--calculation',1)
    active = active + 1 > lastposition ? 0 : active + 1
    setSlider()
    itens[active].classList.add('active')
    

}

prevButton.onclick = () => {
    list.style.setProperty('--calculation',-1)
    active = active - 1 < firstposition ? lastposition : active - 1
    setSlider()
    itens[active].classList.add('active')
    
}

