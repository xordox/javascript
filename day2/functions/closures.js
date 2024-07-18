//simple function
function test(name){
    return `Hello ${name}`;
}
console.log(test("Rocky"));

// //function expression
// const greet = function(){
//     return `testing`;
// }
// console.log(greet());

// const greet1 = function(name) {
//     return `Hello, ${name}!`;
//   };
  
//   console.log(greet1('Bob')); 

//   //arrow function
//   const greet2 =(name) => `Hello ${name}`;
//   console.log(greet2("Sylva"));

//   //immediately invoked function expression
//   (function(){
//     console.log("This is testing");
//   })();

//   //function parameters and arguments
//   function sum(a,b){
//     return a+b;
//   }
//   console.log(sum(3,2));

//   //function with rest parameter
//   function add(...num){
//     return num.reduce((acc,curr)=> acc +curr,0);
//   }
//   console.log(add(1,2,3,4,5));

//   //arrow function scope
//   //wrong approach
//   const person = {
//     name: 'Alice',
//     greet: setTimeout(function(){
//         console.log("This will be displayed after a second");
//     },1000)
//   }

//   //right approach
//   const person1 = {
//     name: 'Alice',
//     greet: function() {
//       setTimeout(() => {
//         console.log(`Hello, ${this.name}!`);
//       }, 1000);
//     }
//   };
  
//   person1.greet(); 

//   //function closure
//   function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//       console.log('Outer Variable:', outerVariable);
//       console.log('Inner Variable:', innerVariable);
//     };
//   }
  
//   const newFunction = outerFunction('outside');
//   newFunction('inside'); 
  
//   //currying same function
//   newF = outerFunction("out")("in");

//   //fuction currying
//   function currySum(a) {
//     return function(b) {
//       return function(c) {
//         return a + b + c;
//       };
//     };
//   }
  
//   console.log(currySum(1)(2)(3));

//   //higher order function
//   function higherOrderFunction(func_callback) {
//     return function(value) {
//       return func_callback(value);
//     };
//   }
  
//   const multiplyByTwo = higherOrderFunction(function(number) {
//     return number * 2;
//   });
  
//   console.log(multiplyByTwo(5));

//   function highOF(hOF){
//     console.log("HEllo");
//     return function(x){return hOF(x);}
//   }

//   function hOF(test){
//     console.log(`${test}Nepal`);
//   }

//   highOF(hOF("welcome 2"));

//   //function composition
//   const compose =(f,g) =>x =>f(g(x));

//   const add5 = x => x+5;
//   const mulBy2 = x => x*2;

//   const  add5AndMulBy2 =compose(mulBy2, add5);

//   console.log(add5AndMulBy2(4));

  //memoization

  function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args); // Convert arguments to a string key
      console.log(key);
      if (cache[key]) {
        return cache[key];
      } else {
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const memoizedFibonacci = memoize(fibonacci);
  
  console.log(memoizedFibonacci(40));


