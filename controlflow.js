// for (i=1;i<=10;i++){
// console.log(i)
// }

// for (i=10; i>=1; i--){
// console.log(i)
// }

// for (let i=2; i<=20; i+=2){
// console.log(i)
// }

// let i=2
// while (i<=20){
// console.log(i)
// i+=2
// }

// let i=1
// do{
//     console.log(i);
//     i++;
// }while(i <= 20)

//  const person = {
//         name: "John",
//         age: 30,
//         profession: "Developer"
//       };
//       for (let key in person) {
//         console.log(key + ": " + person[key]  );
//       }


// let sum=0;
// for (let i=1;i<=100;i++)
// {
//     sum+=i;
// }
// console.log("sum of 100:",sum)

const car = { brand: "Toyota", model: "Camry", year: 2020 };
for(let key in car){
    console.log(key+":"+car[key]);
}