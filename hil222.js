

let callback = (entries, observer) => {
    entries.forEach((entry) => {
     if(entry.isIntersecting){

      console.log('isintersecting');
     
    }
    else if(entry.target){
      console.log('target');

      }})};
  
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
    }; 
let observer = new IntersectionObserver(callback, options);
const cont = document.querySelector('#containers');
const target = cont.querySelectorAll("section[id]");
observer.observe(target);


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







