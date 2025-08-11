

// function add(...name) {
//     // var Name = "Surya";
//     // console.log(Name);
//     console.log(...name);

// }
// add("vicky",23,"Dvelpoer")

// var names=['Surya','vicky','balaji']
// console.log([...names]);

// function outerFunction(){

//     let message = "Hello,";
//     function innerFunction() {
//         console.log(message + "World!");
//     }
//     innerFunction();
    
// }
// outerFunction(); 

function createCounter() {
        let count = 0;
  
        function increment() {
          count++;
          console.log(count);
        }
  
        return increment;
      }
  
      const counter = createCounter();
      counter(); 
      counter(); 
      