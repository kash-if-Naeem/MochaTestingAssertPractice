# Mocha Testing: Assert Practice

--This repo just presents the ways of using assert library of Mocha

--To import asssert we can use const assert = require('assert') or the ES6 syntax

// == and ===
--before moving onward we should have know about double equal and triple equal.
--Double equal is for losely comparing values. It does not look at the type. For example if one value is 7 of type number and other is '7' of type string then these two will be equal by using double equal (==).
--Triple equal is for strict comparing values. It look at the type. For example if one value is 7 of type number and other is '7' of type string then these two will not be equal.

// assert.ok
--assert.ok is just like if statement with a condition within assert.ok(). If that condition is true, the test will pass otherwise it will fail.

// assert.equal
--it behaves just like assert.ok but to be more expressive we use assert.equal.
--Its syntax is simple assert.equal(a, b). Where a is the value to be compared to b.
--assert.equal uses double equal

//assert.strictEqual
--its just like assert.equal but it uses tripleEqual for its condition

//assert.deepEqual
--its just like assert.equal but its used for objects and arrays.

//assert.deepStrictEqual
--its just like assert.strictEqual but its used for objects and arrays.

//other assert methods
--we can use not in most assert methods like assert.notEqual, .notStrictEqual, .notDeepStrictEqual etc
