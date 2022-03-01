// ma pobrac to co widzi aktualnie observer.Observer ma zwrucic href - bierzacy href ma odpowiadac id w menubar.

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let id_ent = entry.target.id
      let hash = '#'
      var hash_id = hash.concat(id_ent)

      // console.log(typeof hash_id)
      console.log(hash_id)

      var navi = document
        .querySelectorAll('a[href^="#"]')
        .forEach((linkName) => {
          var hr = linkName.getAttribute('href') 
          
          if(
          hr === hash_id){
console.log(linkName.hr)
hr.classList.add('current')
}
          // 'href'.classList.add('current')
          // console.log(linkName)
        })
    }
  })
}

let options = {
  root: document.querySelector('#header'),
  rootMargin: '0px',
  threshold: 0.6,
}
observer = new IntersectionObserver(callback, options)
let targets = document.querySelectorAll('section[id]')
targets.forEach((target) => {
  observer.observe(target)
})

// let navi = document.querySelectorAll('a[href^="#"]')
// navi.forEach((l) => {
//   let inn = l.id

//   console.log(inn)
//   // console.log(navi)
// })

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
