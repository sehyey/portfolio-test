
(function(){
    const spanEl = document.querySelector('#footer h1 span')
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




$(function(){
    $('header ul .mainpage').click(function(){
        $('html, body').stop().animate({
            scrollTop: 0            
        }, 600)
    })

})

$(function(){
    $('header ul .about').click(function(){
        $('html, body').stop().animate({
            scrollTop: 1000            
        }, 600)
    })
})

$(function(){
    $('header ul .features').click(function(){
        $('html, body').stop().animate({
            scrollTop: 3000            
        }, 600)
    })
})

$(function(){
    $('header ul .video').click(function(){
        $('html, body').stop().animate({
            scrollTop: 5000            
        }, 600)
    })
})

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