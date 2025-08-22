// const name=["surya","vijay","mani","vicky"]
// name.push("Balaji","Parasanna");
// // name.pop();
// console.log(name);



// const num=[10,9,8,7,6,5,4,3,2,1]
//  num.sort((a, b) => b- a); 
// console.log(...num);

const student = [{ name: "balaji", mark: 67 },
{ name: "surya", mark: 100 },
{ name: "vicky", mark: 89 }]

const rank = student.sort((a, b) => b.mark - a.mark);

rank.forEach((student, index) => {
    console.log(`rank ${index + 1} :${student.name} - ${student.mark} marks`);

})

