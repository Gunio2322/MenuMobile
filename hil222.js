let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let id_ent = entry.target.id
      let hash = '#'
      var hash_id = hash.concat(id_ent)
      var navi = document
        .querySelectorAll('a')
        .forEach((link_name) => {
          var href = link_name.getAttribute('href')
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
