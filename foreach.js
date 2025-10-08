// const furits=["apple","bannan","orange"]
//  const furit=furits.forEach((item,index)=>console.log(item,index));
//  console.log(furit);

const array = [1, 2, 3, 4, 5, 6];

function filter(){
    const modifyarray = array.find(num => num < 5);
    console.log(modifyarray);
}
filter();