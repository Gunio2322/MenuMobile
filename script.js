// SmoothScroll
;(function () {
  // pobier wszystkie linki a href z menu i z foreach rozdziel
  document.querySelectorAll('a[href^="#"]').forEach((elem) => { 
    // na kazdm pojedynczym elemencie z menu  nasłuchuj click i wykonaj funkje z arg (e)
    elem.addEventListener('click', (e) => {
      e.preventDefault()
      // na elemencie elem z pobranym  atrybutem 'href' wykonaj metode scrollIntoView()
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
