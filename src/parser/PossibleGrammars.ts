import { Grammar } from "./Grammar"

function constructParseFunction(inRegex: string | RegExp, outRegex: string | RegExp | null = null): Function {
    if (outRegex) {
        return (dateElement: string): RegExpExecArray | null => {
            var regexp = new RegExp(inRegex),
                regexp2 = new RegExp(outRegex);

            if (regexp.test(dateElement) && !regexp2.test(dateElement)) {
                return regexp.exec(dateElement);
            }
            return null;
        };
    }

    return (dateElement: string): RegExpExecArray | null => {
        var regexp = new RegExp(inRegex);

        if (regexp.test(dateElement)) {
            return regexp.exec(dateElement);
        }
        return null;
    };
}

const month_one_or_two_digits = () => constructParseFunction('^(1[0-2]|[1-9])$');

const day_of_month = () => constructParseFunction('^([1-3][0-9]|[1-9])$', '^(3[2-9])$');

const day_of_month_two_digits = () => constructParseFunction('^(0[1-9]|1[0-9]|2[0-9])$');

const day_abvr = () => constructParseFunction(/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)$/i);

const day_full = () => constructParseFunction(/^(Sunday|Monday|Tuesday|Wednesday|Thusday|Friday|Saturday)$/i);

const month_two_digits = () => constructParseFunction('^(0[1-9]|1[0-2])$');

const month_abvr = () => constructParseFunction(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/i);

const month_full = () => constructParseFunction(/^(January|February|March|April|May|June|July|August|September|Octover|November|Deccember)$/i);

const year_one_or_two_digits = () => constructParseFunction('^(0?[1-9]|[1-9][0-9])$');

const year_two_digits = () => constructParseFunction('^[0-9][0-9]$');

const year_four_digits = () => constructParseFunction('^[0-9]{4}$');

export const PossibleGrammars: Array<Grammar>
    = [{
        grammarName: "C#",
        possibleElements: [
            {
                sectionName: "day_of_month",
                formatSpecifier: "d",
                regexFunc: day_of_month(),
                type: "day"
            },
            {
                sectionName: "day_of_month_two_digits",
                formatSpecifier: "dd",
                regexFunc: day_of_month_two_digits(),
                type: "day"
            },
            {
                sectionName: "day_abvr",
                formatSpecifier: "ddd",
                regexFunc: day_abvr(),
                type: "day"
            },
            {
                sectionName: "day_full",
                formatSpecifier: "dddd",
                regexFunc: day_full(),
                type: "day"
            },
            {
                sectionName: "month_one_or_two_digits",
                formatSpecifier: "M",
                regexFunc: month_one_or_two_digits(),
                type: "month"
            },
            {
                sectionName: "month_two_digits",
                formatSpecifier: "MM",
                regexFunc: month_two_digits(),
                type: "month"
            },
            {
                sectionName: "month_abvr",
                formatSpecifier: "MMM",
                regexFunc: month_abvr(),
                type: "month"
            },
            {
                sectionName: "month_full",
                formatSpecifier: "MMMM",
                regexFunc: month_full(),
                type: "month"
            },
            {
                sectionName: "year_one_or_two_digits",
                formatSpecifier: "y",
                regexFunc: year_one_or_two_digits(),
                type: "year"
            },
            {
                sectionName: "year_two_digits",
                formatSpecifier: "yy",
                regexFunc: year_two_digits(),
                type: "year"
            },
            {
                sectionName: "year_four_digits",
                formatSpecifier: "yyyy",
                regexFunc: year_four_digits(),
                type: "year"
            }
        ]

    },
    {
        grammarName: "Python",
        possibleElements: [
            {
                sectionName: "day_of_month",
                formatSpecifier: "%-d",
                regexFunc: day_of_month(),
                type: "day"
            },
            {
                sectionName: "day_of_month_two_digits",
                formatSpecifier: "%d",
                regexFunc: day_of_month_two_digits(),
                type: "day",
            },
            {
                sectionName: "day_full",
                formatSpecifier: "%A",
                regexFunc: day_full(),
                type: "day"
            },
            {
                sectionName: "day_abvr",
                formatSpecifier: "%a",
                regexFunc: day_abvr(),
                type: "day"
            },
            {
                sectionName: "month_one_or_two_digits",
                formatSpecifier: "%-m",
                regexFunc: month_one_or_two_digits(),
                type: "month"
            },
            {
                sectionName: "month_two_digits",
                formatSpecifier: "%m",
                regexFunc: month_two_digits(),
                type: "month"
            },
            {
                sectionName: "month_abvr",
                formatSpecifier: "%b",
                regexFunc: month_abvr(),
                type: "month"
            },
            {
                sectionName: "month_full",
                formatSpecifier: "%B",
                regexFunc: month_full(),
                type: "month"
            },
            {
                sectionName: "year_two_digits",
                formatSpecifier: "%y",
                regexFunc: year_two_digits(),
                type: "year"
            },
            {
                sectionName: "year_four_digits",
                formatSpecifier: "%Y",
                regexFunc: year_four_digits(),
                type: "year"
            }
        ]
    }

    ]