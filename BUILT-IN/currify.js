function currify(fn) {
  return function len(...a) {
    if (a.length >= fn.length) {
      return fn(...a);
    } else {
      return function (...b) {
        return len(...a, ...b);
      };
    }
  };
}

// // Tests
// // const add3 = (a, b, c) => a + b + c;
// console.log(currify(add3)(1, 2, 3));   // 6
// console.log(currify(add3)(1, 2)(3));   // 6
// console.log(currify(add3)(1)(2, 3));   // 6
// console.log(currify(add3)(1)(2)(3));   // 6