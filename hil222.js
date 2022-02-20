(function () {
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target.id)
      }
    })
  }
  let options = {
    root: document.querySelector('#header'),
    rootMargin: '0px',
    threshold: 0.6,
  }
  let observer = new IntersectionObserver(callback, options)
  let targets = document.querySelectorAll('section[id]')
  targets.forEach(function (e) {
    observer.observe(e)
  })
  let navia = document.querySelectorAll('[href^="#"]')
  navia.forEach(function (n) {
    let aga = n.innerHTML

    console.log(aga)
  })
})();
// DRUGI OBSERVER

// (function () {
//   let callback = (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log(entry.target.id)
//       }
//     })
//   }
//   let options = {
//     root: document.querySelector('#header'),
//     rootMargin: '0px',
//     threshold: 0.6,
//   }
//   let observer = new IntersectionObserver(callback, options)
//   let targets = document.querySelectorAll('section[id]')
//   targets.forEach(function (e) {
//     observer.observe(e)
//   })
//   let navia = document.querySelectorAll('[href^="#"]')
//   navia.forEach(function (n) {
//     let aga = n.innerHTML

//     console.log(aga)
//   })
// })()
