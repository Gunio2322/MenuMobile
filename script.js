// SmoothScroll
;(function () {
  document.querySelectorAll('a[href^="#"]').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault()
      document.querySelector(elem.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        offsetTop: 80,
      })
    })
  })
})();

// AddActiveClass
(function () {
  const navithem = document.querySelector('ul')
  const burger = document.querySelector('.hamburger')
  burger.addEventListener('click', function(){
    navithem.classList.toggle('active')
    navithem.addEventListener('click', function(){
      navithem.classList.remove('active')
    })
  })
})();
