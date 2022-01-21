# Reverse Date Parser

Allows pro**grammars** to input a date string such as '2021-2-1' and get the corresponding possible format strings.

Ex: '2021-2-2' returns [yyyy-d-M, yyyy-M-d]

The objective is to remove the time it takes for a developer to search a particular language's documentation to find the specific format specifiers for a date string.

---

## Usage
1. Input a date string in the text box
2. Select the target language
3. Copy the desired format date string from the options list


## Supported Specifiers

### C# ([Documentation](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings))

| Format Specifier      | Description | Supported
| ----------- | ----------- | ----------- |
| d      | The day of the month, from 1 through 31.       |    yes         |
| dd   | The day of the month, from 01 through 31.        |       yes      |
| ddd   | The day of the month, from 01 through 31.        |      yes       |
| dddd   | The full name of the day of the week.        |     yes        |
| M   | The month, from 1 through 12.        |     yes        |
| MM   | The month, from 01 through 12.        |     yes        |
| MMM   | The abbreviated name of the month.        |   yes          |
| MMMM   | The full name of the month.        |      yes       |
| y   | The year, from 0 to 99.        |       yes      |
| yy   | The year, from 00 to 99.        |    yes         |
| yyyy   | The year as a four-digit number.        |      yes       |

### Python ([Documentation](https://docs.python.org/3/library/datetime.html))
| Format Specifier      | Description | Supported
| ----------- | ----------- | ----------- |
| %d      | Day of the month as a zero-padded decimal number.       |    yes         |
| %-d      | Day of the month as a decimal number.       |    yes         |
| %A      |  	Weekday as locale’s full name.       |    yes         |
| %a      | Weekday as locale’s abbreviated name.       |    yes         |
| %m      | Month as a zero-padded decimal number.       |    yes         |
| %-m      | Month as a decimal number.       |    yes         |
| %B      |  	Month as locale’s full name.       |    yes         |
| %y      | Year without century as a zero-padded decimal number.    |    yes         |
| %Y      |  	Year with century as a decimal number.      |    yes         |

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

John Yenter-Briars - <jyenterbriars@gmail.com>

Project Link: [https://github.com/johnyenter-briars/reverse-date-parser](https://github.com/johnyenter-briars/reverse-date-parser)

## Acknowledgements

This app took great inspiration from [Crontab Guru](https://crontab.guru) which is a totally awesome site that you should totally checkout. 
 

## Contributing

Any contributions are welcome. I am not the best React programmer, nor am I any good at design, so I'm sure there's a great deal that could be improved.