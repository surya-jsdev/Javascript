// let age = 10
// function vote() {
//     if (age >= 18) {
//         console.log("Eligble for vote")
//     } else {
//         console.log("Your Not Eligble for vote");
//     }
// }
// vote()

// function username(name) { 
//     console.log("Hai" + name + "!");
// }
// username("Surya")

// let age = 19
//         function vote() {
//             if (age >= 18) {
//                 console.log("Eligble for vote")
//             } else {
//                 console.log("Your Not Eligble for vote");
//             }
//         }
//         vote()

// function add(a,b){
//     return a*b;
// }
// const result=add(5,6)   
// console.log(result);

// let name="sandy";
// console.log([...name].length);


// let array = [{ name: "sand", age: 25, profession: "frontend" }, { name: "sam", age: 35, profession: "backend" },
// { name: "ajay", age: 45, profession: "fullstack" },
// { name: "sam", age: 25, profession: "UI/Ux" }];

// function names(datas){
//   for (let data of datas) {
//     if (data.name === "ajay") {
//       console.log(data);
//     } 
//   }
// }
// names(array);

// function phones(){

//   console.log("This Iphone");
//   console.log("Thid is Redmi");
//   console.log("This is appo");
// }
// phones()

// student = {
//   name: "surya",
//   age: 22,
// }
// student02 = {
//   proffession: "Developer",
//   city: 'Chennai'
// }
// std = { ...student, ...student02 };
// console.log(std);

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // Output: 10



// var phone = [{Mobilename: "apple", series: "pro" }, 
//   { Mobilename: "Redmi", series: "note" }, 
//   { Mobilename: "oppo", series: "note" }, 
//   { Mobilename: "Realme", series: "note" }]

// function phones(...models) {

//   for (let mobile of models) {
//     if (mobile.Mobilename ==="apple"){
//       console.log(mobile);
//     }
// }
// }
// phones(...phone)


// let array=["BMW","Audi","polo"]
// console.log([...array]);


// const add=(a,b)=>{
//    console.log(a+b);
// }
// add(2,5)

// let a=10;
// let b=20;

// function add(){
//     console.log(a+b);
// }
// add()

// var factor="Vijay";
// var fplayer="Dhoni";
// var fmovie="Leo";

// function favourite(){
//     console.log("Favourite Actor:"+factor);
//     console.log("Favourite player:"+fplayer);
//     console.log("Favourite movie:"+fmovie);

// }
// favourite()

// function area(length, breadth) {

//     var area = length * breadth;
//     console.log("Area is:" + area);
 
// }
// area(20, 20)

// function add(a,b){

//     return a+b;
   
// }
//  var c=add(5,5);
//  console.log(c);
 
      function showMessage() {
          var  message = "Hello, World!";
        if (true) {
          // Function scope
        var mess=message;
          console.log(mess);
        }
      }
  
      showMessage(); // Output: Hello, World!

      
