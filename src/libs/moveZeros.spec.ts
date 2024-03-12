import { expect, test } from "bun:test";

import { moveZerosFilter, moveZerosReduce, moveZerosWhile } from "./moveZeros";

const INPUT_TEST_ARRAY = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
const RESULT = [false, 1, 1, 2, 1, 3, "a", 0, 0];

test("function moveZerosFilter correct move zeros to the end of array", () => {
	console.time("moveZerosFilter");
	expect(moveZerosFilter(INPUT_TEST_ARRAY)).toEqual(RESULT);
	console.timeEnd("moveZerosFilter");
});

test("function moveZerosReduce correct move zeros to the end of array", () => {
	console.time("moveZerosReduce");
	expect(moveZerosReduce(INPUT_TEST_ARRAY)).toEqual(RESULT);
	console.timeEnd("moveZerosReduce");
});

test("function moveZerosWhile correct move zeros to the end of array", () => {
	console.time("moveZerosWhile");
	expect(moveZerosWhile(INPUT_TEST_ARRAY)).toEqual(RESULT);
	console.timeEnd("moveZerosWhile");
});
