// import assert lib
const assert = require('assert');

// describe('+', () => {
//     it('return sum of arguments', () => {

//         // setup
//         const firstNum = 3;
//         const secNum = 4;
//         const expectedSum = '7';

//         // exercise

//         const result = firstNum + secNum; 
        
//         // verify

//         // assert.ok(result == expectedSum);
//         // assert.equal (result, expectedSum);
//         // assert.strictEqual (result, expectedSum)
//     });
// });

// assert.deepEqual

describe('+', () => {
  it('returns the sum of two values', () => {
    // Setup
		let expected = {a: 3, b: 4, result: 7};
		let sum = {a: 3, b: 4};

        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];
        const arr3 = [1, 2, '3'];


    // Exercise
		sum.result = sum.a + sum.b;

    // Verify
    assert.deepStrictEqual(sum, expected);
    // assert.deepStEqual(arr1, arr3);
  });
});

// also deepStrictEqual, notStrictEqual etc...
