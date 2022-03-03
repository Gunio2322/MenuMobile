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
  burger.addEventListener('click', function () {
    navithem.classList.toggle('active')
    navithem.addEventListener('click', function () {
      navithem.classList.remove('active')
    })
  })
})();
// Menu current
(function () {
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let id_ent = entry.target.id
        let hash = '#'
        let hash_id = hash.concat(id_ent)
        let navi = document.querySelectorAll('a').forEach((link_name) => {
          let href = link_name.getAttribute('href')
          if (href === hash_id) {
            link_name.classList.add('current')
          } else if (href !== hash_id) {
            link_name.classList.remove('current')
          }
        })
      }
    })
  }
  let options = {
    root: document.querySelector('#header'),
    rootMargin: '0px',
    threshold: 0.8,
  }
  observer = new IntersectionObserver(callback, options)
  let targets = document.querySelectorAll('section[id]')
  targets.forEach((target) => {
    observer.observe(target)
  })
})();
