(function() {

let callback = (entries, observer) => {
    entries.forEach((entry) => {

     
     if(entry.isIntersecting){
console.log('is');
console.log(entry)
       
     
    }
    // else if(entry.target){
    //   console.log('isinter');

    //   }
    })};
  
  let options = {
    root: document.querySelector('#header'),
    rootMargin: '0px',
    threshold: 0.6
    }; 
let observer = new IntersectionObserver(callback, options);
// const target = document.querySelector('#containers');
// const arow = document.querySelectorAll('a[href^="#"]');

let targets = document.querySelectorAll('section[id]');
targets.forEach(function(e){
  observer.observe(e)
  // console.log(e);
  // console.log(targets);
});


  


// conty.forEach(function(entry) {
//   console.log(entry);
// });

// observer.observe(target)

}());
// DRUGI OBSERVER


// (function() {
//     let callback = (entries, observer) => {
//         entries.forEach(entry => {
//           if(entry.isIntersecting){
        
//          document.querySelector('header').classList.remove('opaque'); 
//       //    document.querySelector('body').classList.remove('supka'); 
//           }
//           else if(entry.target){
//             document.querySelector('header').classList.add('opaque'); 
//           //   document.querySelector('body').classList.add('supka'); 
//         } 
//       })}
//         let options = {
         
//           root: null, //document.querySelector('#jobs'),
//           rootMargin: '0px',
//           threshold: 1.0
          
//         };
        
    
//       let observer = new IntersectionObserver(callback, options);
//       let target = document.querySelector('#start');
//       observer.observe(target); //target moze byc img div
  
//   }());
