//log values with variable names smartly

const library1 = "jQuery";
const library2 = "React";

//instead of doing this
console.log(`library1 - ${library1}`);//library1 - jQuery
console.log(`library2 - ${library2}`);//library2 - React

//we can do this
console.log({library1});//{library1: 'jQuery'}
console.log({library2});//{library2: 'React'}