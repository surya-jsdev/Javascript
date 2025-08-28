// const student = {
//     name: "surya",
//     age: 22,
//     phonenumber: 6369824770
// }
// student.age = 23;
// console.log(student.age); // Output: 35

// student["profession"] = "Designer";
// console.log(student.profession);
// // const keyname="name"
// // console.log(student[keyname]);
// // const keyage="age"
// // console.log(student.keyage);
// // . is called access operator
// // console.log(student.name);
// // console.log(student.age);
// // console.log(student.phonenumber);
 


function calculateAge(birthDateString) {
  // Convert input string to Date object
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // If birthday hasn't happened yet this year, reduce age by 1
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

// Example usage
console.log(calculateAge("2001-09-18")); // 👉 will return age

