import { test } from "./tester.js";
import { findClosestValues } from "./array-mutations.js";

const inputArr = [1, 2, 4, 4, 6, 7]
const needle = 3
const number = 4

console.info(findClosestValues(inputArr, needle, number))
test("findClosestValues: Test case 1", findClosestValues, [inputArr, needle, number], [1, 2, 4, 4])

const inputArr2 = [-3, -3, -2, 0, 1, 1, 3, 7, 7]
const needle2 = 5
const number2 = 3

console.info(findClosestValues(inputArr2, needle2, number2))
test("findClosestValues: Test case 2", findClosestValues, [inputArr2, needle2, number2], [3, 7, 7])

// edge case (should warn, test should fail)

const inputArr3 = [1, 2, 3, 4, 5, 6]
const needle3 = undefined
const number3 = 2

test("Edge case 1", findClosestValues, [inputArr3, needle3, number3], [1, 2, 3])
// console.info(findClosestValues(inputArr3, needle3, number3))
