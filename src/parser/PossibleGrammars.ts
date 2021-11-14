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

export const PossibleGrammars: Array<Grammar>
    = [{
        grammarName: "C#",
        possibleElements: [
            {
                sectionName: "day_of_month",
                formatSpecifier: "d",
                regexFunc: constructParseFunction('^([1-3][0-9]|[1-9])$', '^(3[2-9])$'),
                type: "day"
            },
            {
                sectionName: "day_of_month_two_digits",
                formatSpecifier: "dd",
                regexFunc: constructParseFunction('^([0-3][0-9])$', '^([3-9][2-9])$'),
                type: "day"
            },
            {
                sectionName: "day_abvr",
                formatSpecifier: "ddd",
                regexFunc: constructParseFunction(/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)$/i),
                type: "day"
            },
            {
                sectionName: "day_full",
                formatSpecifier: "dddd",
                regexFunc: constructParseFunction(/^(Sunday|Monday|Tuesday|Wednesday|Thusday|Friday|Saturday)$/i),
                type: "day"
            },
            {
                sectionName: "month_one_or_two_digits",
                formatSpecifier: "M",
                regexFunc: constructParseFunction('^((1|)[0-9])$', '^[1][3-9]$'),
                type: "month"
            },
            {
                sectionName: "month_two_digits",
                formatSpecifier: "MM",
                regexFunc: constructParseFunction('^[0-2][1-9]$', '^[1-9][3-9]$'),
                type: "month"
            },
            {
                sectionName: "month_abvr",
                formatSpecifier: "MMM",
                regexFunc: constructParseFunction(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/i),
                type: "month"
            },
            {
                sectionName: "month_full",
                formatSpecifier: "MMMM",
                regexFunc: constructParseFunction(/^(January|February|March|April|May|June|July|August|September|Octover|November|Deccember)$/i),
                type: "month"
            },
            {
                sectionName: "year_one_or_two_digits",
                formatSpecifier: "y",
                regexFunc: constructParseFunction('^(0?[1-9]|[1-9][0-9])$'),
                type: "year"
            },
            {
                sectionName: "year_two_digits",
                formatSpecifier: "yy",
                regexFunc: constructParseFunction('^[0-9][0-9]$'),
                type: "year"
            },
            {
                sectionName: "year_four_digits",
                formatSpecifier: "yyyy",
                regexFunc: constructParseFunction('^[0-9]{4}$'),
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
                regexFunc: constructParseFunction('^([1-3][0-9]|[1-9])$', '^(3[2-9])$'),
                type: "day"
            },
            {
                sectionName: "day_of_month_two_digits",
                formatSpecifier: "%d",
                regexFunc: constructParseFunction('^([0-3][0-9])$', '^([3-9][2-9])$'),
                type: "day",
            },
            {
                sectionName: "day_full",
                formatSpecifier: "%A",
                regexFunc: constructParseFunction(/^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)$/i),
                type: "day"
            },
            {
                sectionName: "day_abvr",
                formatSpecifier: "%a",
                regexFunc: constructParseFunction(/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)$/i),
                type: "day"
            },
            {
                sectionName: "month_one_or_two_digits",
                formatSpecifier: "%-m",
                regexFunc: constructParseFunction('^((1|)[0-9])$', '^[1][3-9]$'),
                type: "month"
            },
            {
                sectionName: "month_two_digits",
                formatSpecifier: "%m",
                regexFunc: constructParseFunction('^[0-2][1-9]$', '^[1-9][3-9]$'),
                type: "month"
            },
            {
                sectionName: "month_abvr",
                formatSpecifier: "%B",
                regexFunc: constructParseFunction(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/i),
                type: "month"
            },
            {
                sectionName: "year_two_digits",
                formatSpecifier: "%y",
                regexFunc: constructParseFunction('^[0-9][0-9]$'),
                type: "year"
            },
            {
                sectionName: "year_four_digits",
                formatSpecifier: "%Y",
                regexFunc: constructParseFunction('^[0-9]{4}$'),
                type: "year"
            }
        ]
    }

    ]