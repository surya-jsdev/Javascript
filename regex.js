// const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
// console.log(phoneRegex.test("123-456-7890")); 
// console.log(phoneRegex.test("1234567890"));   

// const text="surya Surya";
// const regex=/surya/i;
// console.log(text.match(regex));


console.log("setTimeout: will run once after 1 second");
setTimeout(() => console.log("Timeout executed"), 1000);

console.log("setInterval: will run every 2 seconds. Cancel after 6 seconds.");
const intervalId = setInterval(() => console.log("Interval tick"), 2000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared");
}, 1000);