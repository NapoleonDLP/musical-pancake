
const solution = (T, R) => {
  // declare pointsCount
  let pointsCount = 0;

  // get length of group string without the a, b, c
  let indexOfGroupNumber = T[0].search(/\d/);
  let testName = T[0].substring(0, indexOfGroupNumber);

  // store data in an obj where key is the group and value is an array [amount of times group is tested, amount of 'OK]
  let collection = {};
  let totalGroups = 0;

  for(let i = 0; i < T.length; i++) {
    let currentTestString = testName + T[i][indexOfGroupNumber];
    if (collection[currentTestString] === undefined) {
      collection[currentTestString] = [1, 0];
      totalGroups++;

      if (R[i] === 'OK') {
        collection[currentTestString][1]++;
      }

    } else if (collection[currentTestString]) {
      collection[currentTestString][0]++;

      if (R[i] === 'OK') {
        collection[currentTestString][1]++;
      }
    }
  };

  // iterate through object
  for (let testGroup in collection) {
    // if object [testGroup][0] is equal to object[testGroup][1]
    if (collection[testGroup][0] === collection[testGroup][1]) {
      // increase pointsCount by 1
      pointsCount++;
    }
  }

  // return points count / total groups rounded down. Math.floor()
  const roundedAvg = Math.floor(((pointsCount * 100) / totalGroups));

  return roundedAvg;
};

/*

input: array, array
output: integer
constraints: n/a
edgecases:
  A case where every group has more than one test.

*/

const arg1 = ['test1a', 'test2', 'test1b', 'test1c', 'test3'];
const arg2 = ['Wrong answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded'];
const test1 = solution(arg1, arg2); //Solution: 33

const arg3 = ['codility1', 'codility3', 'codility2', 'codility4b', 'codility4a'];
const arg4 = ['Wrong answer', 'OK', 'OK', 'Runtime error', 'OK'];
const test2 = solution(arg3, arg4); //Solution: 50

console.log(
  "Test 1: " + (test1 === 33 ? `pass: expected ${ 33 } got ${test1}` : `fail: expected ${ 33 }} got ${test1}`),
  "\nTest 2: " + (test2 === 50 ? `pass: expected ${ 50 } got ${test2}` : `fail: expected ${ 50 }} got ${test2}`)
)
