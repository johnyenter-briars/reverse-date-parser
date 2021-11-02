import React from 'react';
import { render, screen } from '@testing-library/react';
import { parseDateString } from './parser/Parser';
import App from './App';

//TODO - fix this
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const testSamples = [
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

  }
]

describe("Parser Test", () => {
  test('Invalid string returns empty list', () => {
    // arrange 
    var dateString = "sgsgsdgd";

    //and act
    var result = parseDateString(dateString, "C#");

    // assert
    expect(result).toEqual([]);
  });
  for (let sample of testSamples) {

    test('Run Test ' + sample.data, () => {
      var result = parseDateString(sample.data, "C#");

      expect(new Set(result)).toEqual(new Set(sample.result));
    });
  }

  // test('Run Test Samples', () => {
  //   for (let sample of testSamples) {
  //     var result = parseDateString(sample.data, "C#");

  //     expect(new Set(result)).toEqual(new Set(sample.result));

  //     // if (result.length === sample.result.length &&
  //     //   result.every((str) => result?.includes(str))) {
  //     //   console.log(`Pass for ${sample.data}`);
  //     // }
  //     // else {
  //     //   console.log(`Fail for ${sample.data}`);
  //     //   console.log(`${result} does not match ${sample.result}`);
  //     // }
  //   }
  // });
})
