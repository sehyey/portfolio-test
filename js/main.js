const headerEl = document.querySelector('header')

window.addEventListener('scroll', function(){
    this.requestAnimationFrame(sc)
})

function sc(){
    let bs = window.scrollY
    if(bs > 0){
        headerEl.classList.add('on')
    }else{
        headerEl.classList.remove('on')
    }
}

const animationmove = function(selector){
    const targetEl = document.querySelector(selector)
    const bs = window.scrollY
    const targetscrollY = targetEl.getBoundingClientRect().top + bs
    window.scrollTo({
        top : targetscrollY, behavior : 'smooth'
    })
}

const scrollmove = document.querySelectorAll('[data-animation-scroll="true"]')

for(let i = 0; i < scrollmove.length; i++){
    scrollmove[i].addEventListener('click', function(){
        const target = this.dataset.target;
        animationmove(target)
    })
}


(function(){
    const spanEl = document.querySelector('footer h1 span')
    const txt = ['Thank you for viewing my portfolio!']

    let index = 0;
    let currentTxt = txt[index].split('')

    function writeTxt(){
        spanEl.textContent += currentTxt.shift()

        if(currentTxt.length !==0){
            setTimeout(writeTxt, Math.floor(Math.random() * 100))
        }else{
            currentTxt = spanEl.textContent.split('')

            setTimeout(deleteTxt, 3000)
        }
    }
    writeTxt()

    function deleteTxt(){
        currentTxt.pop()
        spanEl.textContent = currentTxt.join('')

        if(currentTxt.length !==0){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
            }else{
                index = (index+1) % txt.length
                currentTxt = txt[index].split('')
                writeTxt()
            }
    }
})()

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('.gotop').fadeIn()
        } else {
            $('.gotop').fadeOut()
        }
    })

    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html, body').stop().animate({
            scrollTop: 0
        }, 600)
    })
})