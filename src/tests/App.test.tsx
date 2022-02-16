import React from 'react';
import { render, screen } from '@testing-library/react';
import { parseDateString } from '../parser/Parser';


describe("General Parser Test", () => {
	test('Invalid string returns empty list', () => {
		var dateString = "sgsgsdgd";

		var result = parseDateString(dateString, "C#");

		expect(result).toEqual([]);
	});
})

describe("C# Test Cases", () => {
	test("C# Test Case: 2021-2-1", () => {
		var result = parseDateString("2021-2-1", "C#");
		expect(new Set(result)).toEqual(new Set(['yyyy-d-M', 'yyyy-M-d']));
	});

	test("C# Test Case: 2021-02-01", () => {
		var result = parseDateString("2021-02-01", "C#");
		expect(new Set(result)).toEqual(new Set(['yyyy-dd-MM', 'yyyy-MM-dd']));
	});

	test("C# Test Case: feb 28 0006", () => {
		var result = parseDateString("feb 28 0006", "C#");
		expect(new Set(result)).toEqual(new Set(['MMM d yyyy', 'MMM dd yyyy']));
	});

	test("C# Test Case: 6/12/2021", () => {
		var result = parseDateString("6/12/2021", "C#");
		expect(new Set(result)).toEqual(new Set(['M/d/yyyy', 'M/dd/yyyy', 'd/MM/yyyy', 'd/M/yyyy']));
	});

	test("C# Test Case: 06-06-2021", () => {
		var result = parseDateString("06-06-2021", "C#");
		expect(new Set(result)).toEqual(new Set(['dd-MM-yyyy', 'MM-dd-yyyy']));
	});

	test("C# Test Case: 06/12/98", () => {
		var result = parseDateString("06/12/98", "C#");
		expect(new Set(result)).toEqual(new Set(['dd/M/y', 'dd/M/yy', 'dd/MM/y', 'dd/MM/yy', 'MM/d/y', 'MM/d/yy', 'MM/dd/y', 'MM/dd/yy']));
	});

	test("C# Test Case: 6 01 1998", () => {
		var result = parseDateString("6 01 1998", "C#");
		expect(new Set(result)).toEqual(new Set(['M dd yyyy', 'd MM yyyy']));
	});

	test("C# Test Case: march 1 98", () => {
		var result = parseDateString("march 1 98", "C#");
		expect(new Set(result)).toEqual(new Set(['MMMM d yy', 'MMMM d y']));
	});

	test("C# Test Case: 06 sunday 1998", () => {
		var result = parseDateString("06 sunday 1998", "C#");
		expect(new Set(result)).toEqual(new Set(['MM dddd yyyy']));
	});

	test("C# Test Case: 31 Fri 2", () => {
		var result = parseDateString("31 Fri 2", "C#");
		expect(new Set(result)).toEqual(new Set(['y ddd M', 'yy ddd M']));
	});

	test("C# Test Case: this is a test", () => {
		var result = parseDateString("this is a test", "C#");
		expect(new Set(result)).toEqual(new Set([]));
	});

	test("C# Test Case: 2021-02-0", () => {
		var result = parseDateString("2021-02-0", "C#");
		expect(new Set(result)).toEqual(new Set([]));
	});

	test("C# Test Case: Friday 22 2021", () => {
		var result = parseDateString("Friday 22 2021", "C#");
		expect(new Set(result)).toEqual(new Set([]));
	});

});

describe("Python Test Cases", () => {
	test("Python Test Case: 2021-2-1", () => {
		var result = parseDateString("2021-2-1", "Python");
		expect(new Set(result)).toEqual(new Set(['%Y-%-d-%-m', '%Y-%-m-%-d']));
	});

	test("Python Test Case: 2021-02-01", () => {
		var result = parseDateString("2021-02-01", "Python");
		expect(new Set(result)).toEqual(new Set(['%Y-%d-%m', '%Y-%m-%d']));
	});

	test("Python Test Case: feb 28 0006", () => {
		var result = parseDateString("feb 28 0006", "Python");
		expect(new Set(result)).toEqual(new Set(["%b %-d %Y", "%b %d %Y"]));
	});

	test("Python Test Case: 6/12/2021", () => {
		var result = parseDateString("6/12/2021", "Python");
		expect(new Set(result)).toEqual(new Set(["%-d/%-m/%Y", "%-d/%m/%Y", "%-m/%-d/%Y", "%-m/%d/%Y",]));
	});

	test("Python Test Case: 06-06-2021", () => {
		var result = parseDateString("06-06-2021", "Python");
		expect(new Set(result)).toEqual(new Set(["%d-%m-%Y", "%m-%d-%Y",]));
	});

	test("Python Test Case: 06/12/98", () => {
		var result = parseDateString("06/12/98", "Python");
		expect(new Set(result)).toEqual(new Set(["%d/%-m/%y", "%d/%m/%y", "%m/%-d/%y", "%m/%d/%y",]));
	});

	test("Python Test Case: 6 01 1998", () => {
		var result = parseDateString("6 01 1998", "Python");
		expect(new Set(result)).toEqual(new Set(["%-d %m %Y", "%-m %d %Y",]));
	});

	test("Python Test Case: march 1 98", () => {
		var result = parseDateString("march 1 98", "Python");
		expect(new Set(result)).toEqual(new Set(['%B %-d %y']));
	});

	test("Python Test Case: 06 sunday 1998", () => {
		var result = parseDateString("06 sunday 1998", "Python");
		expect(new Set(result)).toEqual(new Set(['%m %A %Y']));
	});

	test("Python Test Case: 31 Fri 2", () => {
		var result = parseDateString("31 Fri 2", "Python");
		expect(new Set(result)).toEqual(new Set(['%y %a %-m']));
	});

	test("Python Test Case: this is a test", () => {
		var result = parseDateString("this is a test", "Python");
		expect(new Set(result)).toEqual(new Set([]));
	});

	test("Python Test Case: Friday 22 2021", () => {
		var result = parseDateString("Friday 22 2021", "Python");
		expect(new Set(result)).toEqual(new Set([]));
	});
});
