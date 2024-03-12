export const moveZerosFilter = <T>(input: T[]) => {
	const other = input.filter((item) => item !== 0);
	return [
		...other,
		...Array.from({ length: input.length - other.length }).map(() => 0),
	];
};

export const moveZerosReduce = <T>(input: T[]) => {
	const result = input.reduce<{
		other: unknown[];
		zeros: 0[];
	}>(
		(result, currentValue) => {
			const category = currentValue === 0 ? "zeros" : "other";
			return {
				...result,
				[category]: [...result[category], currentValue],
			};
		},
		{
			other: [],
			zeros: [],
		}
	);

	return [...result.other, ...result.zeros];
};

export const moveZerosWhile = <T>(input: T[]) => {
	const zeros: 0[] = [],
		other: unknown[] = [];

	let idx = 0;
	while (idx !== input.length) {
		(input[idx] === 0 ? zeros : other).push(input[idx]);
		idx++;
	}

	return [...other, ...zeros];
};
