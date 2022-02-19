
const solution = (T, R) => {

};

const arg1 = ['test1a', 'test2', 'test1b', 'test1c', 'test3'];
const arg2 = ['Wrong answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded'];
const test1 = solution(arg1, arg2); //Solution: 33

const arg3 = [];
const arg4 = [];
const test2 = solution(arg3, arg4); //Solution: 50

console.log(
  "Test 1: " + (test1 === 33 ? `pass: expected ${ 33 } got ${test1}` : `fail: expected ${ 33 }} got ${test1}`: "fail"),
  "\nTest 2: " + (test2 === 50 ? `pass: expected ${ 50 } got ${test2}` : `fail: expected ${ 50 }} got ${test2}`: "fail")
)
