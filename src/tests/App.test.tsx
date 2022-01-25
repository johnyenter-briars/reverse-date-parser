import React from 'react';
import { render, screen } from '@testing-library/react';
import { parseDateString } from '../parser/Parser';

//TODO - fix this
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const cSharpTestCases = [
  {
    data: "2021-2-1",
    isValid: true,
    result: ["yyyy-d-M", "yyyy-M-d"]
  },
  {
    data: "2021-02-01",
    isValid: true,
    result: ["yyyy-dd-MM", "yyyy-MM-dd"]
  },
  {
    data: "feb 28 0006",
    isValid: true,
    result: ["MMM d yyyy", "MMM dd yyyy"]
  },
  {
    data: "6/12/2021",
    isValid: true,
    result: ["M/d/yyyy", "M/dd/yyyy", "d/MM/yyyy", "d/M/yyyy"]
  },
  {
    data: "06-06-2021",
    isValid: true,
    result: ["dd-MM-yyyy", "MM-dd-yyyy"]
  },
  {
    data: "06/12/98",
    isValid: true,
    result: ["dd/M/y", "dd/M/yy", "dd/MM/y", "dd/MM/yy", "MM/d/y", "MM/d/yy", "MM/dd/y", "MM/dd/yy"]
  },
  {
    data: "6 01 1998",
    isValid: true,
    result: ["M dd yyyy", "d MM yyyy"]
  },
  {
    data: "march 1 98",
    isValid: true,
    result: ["MMMM d yy", "MMMM d y"]
  },
  {
    data: "06 sunday 1998",
    isValid: true,
    result: ["MM dddd yyyy"]
  },
  {
    data: "31 Fri 2",
    isValid: false,
    result: ["y ddd M", "yy ddd M"]
  },
  {
    data: "this is a test",
    isValid: false,
    result: []
  },
  {
    data: "Friday 22 2021",
    isValid: false,
    result: []
  }
]

let pythonTestCases = [
  {
    data: "2021-2-1",
    isValid: true,
    result: ["%Y-%-d-%-m", "%Y-%-m-%-d"]
  },
  {
    data: "2021-02-01",
    isValid: true,
    result: ["%y-%d-%m", "%y-%m-%d"]
  },
  {
    data: "feb 28 0006",
    isValid: true,
    result: ["MMM d yyyy", "MMM dd yyyy"]
  },
  {
    data: "6/12/2021",
    isValid: true,
    result: ["M/d/yyyy", "M/dd/yyyy", "d/MM/yyyy", "d/M/yyyy"]
  },
  {
    data: "06-06-2021",
    isValid: true,
    result: ["dd-MM-yyyy", "MM-dd-yyyy"]
  },
  {
    data: "06/12/98",
    isValid: true,
    result: ["dd/M/y", "dd/M/yy", "dd/MM/y", "dd/MM/yy", "MM/d/y", "MM/d/yy", "MM/dd/y", "MM/dd/yy"]
  },
  {
    data: "6 01 1998",
    isValid: true,
    result: ["M dd yyyy", "d MM yyyy"]
  },
  {
    data: "march 1 98",
    isValid: true,
    result: ["MMMM d yy", "MMMM d y"]
  },
  {
    data: "06 sunday 1998",
    isValid: true,
    result: ["MM dddd yyyy"]
  },
  {
    data: "31 Fri 2",
    isValid: false,
    result: ["y ddd M", "yy ddd M"]
  },
  {
    data: "this is a test",
    isValid: false,
    result: []
  },
  {
    data: "Friday 22 2021",
    isValid: false,
    result: []
  }
]

describe("General Parser Test", () => {
  test('Invalid string returns empty list', () => {
    // arrange 
    var dateString = "sgsgsdgd";

    //and act
    var result = parseDateString(dateString, "C#");

    // assert
    expect(result).toEqual([]);
  });
})

describe("C# Test Cases", () => {
  //arrange
  for (let sample of cSharpTestCases) {
    test(`C# Test Case: ${sample.data}`, () => {
      //act
      var result = parseDateString(sample.data, "C#");

      //assert
      expect(new Set(result)).toEqual(new Set(sample.result));
    });
  }
});

describe("Python Test Cases", () => {
  //arrange
  for (let sample of pythonTestCases) {
    test(`Python Test Case: ${sample.data}`, () => {
      if(sample.data === "2021-2-1"){
        var x = 5;
      }
      //act
      var result = parseDateString(sample.data, "Python");

      //assert
      expect(new Set(result)).toEqual(new Set(sample.result));
    });
  }
});
