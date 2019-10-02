str = 'StrangerThings';

const reverseString =(str) => {

let reversedStr = '';

for(let i = str.lenght-1; i>=0; i--){

    reversedStr += str[i];
}
console.log(reversedStr);
}