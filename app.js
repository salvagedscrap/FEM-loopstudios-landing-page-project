const hamburger = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.close-icon')
const headerNav = document.querySelector('.header-nav')


hamburger.addEventListener('click', function(){
    headerNav.classList.add('nav-active')
    hamburger.classList.add('hamhide')
    closeIcon.classList.add('closeshow')
    
})
closeIcon.addEventListener('click', function(){
    headerNav.classList.remove('nav-active')
    hamburger.classList.remove('hamhide')
    closeIcon.classList.remove('closeshow')
})