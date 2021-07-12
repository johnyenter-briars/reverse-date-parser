import { PossibleElement } from "./PossibleElement";
import { Grammar } from "./Grammer";
import { string } from "yargs";
import { Split } from "./Split";
import { MatchElement } from "./MatchElement";


const possibleGrammars:Array<Grammar> 
= [ {
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

    }
    
]

const possibleSplits: Split[] 
= [
    {
        splitName: "dash",
        splitOn: "-",
        splitStringArray: null
    },
    {
        splitName: "foward_slash",
        splitOn: "/",
        splitStringArray: null
    },
    {
        splitName: "space",
        splitOn: " ",
        splitStringArray: null
    }
]

function constructParseFunction(inRegex: string | RegExp, outRegex: string | RegExp | null = null): Function{
    if(outRegex){
        return (dateElement: string): RegExpExecArray | null => {
            var regexp = new RegExp(inRegex),
                regexp2 = new RegExp(outRegex);

            if(regexp.test(dateElement) && !regexp2.test(dateElement)){
                return regexp.exec(dateElement);
            }
            return null;
        };
    }

    return (dateElement: string): RegExpExecArray | null => {
        var regexp = new RegExp(inRegex);

        if(regexp.test(dateElement)){
            return regexp.exec(dateElement);
        }
        return null;
    };
}

// Returns an array of possible character codes the given element string COULD represent
function matchElement(element: string, possibleElements: Array<PossibleElement> ): Array<PossibleElement>{
    var possibleMatches = new Array<PossibleElement>();
    
    for(let possibleSection of possibleElements){
        var result = possibleSection.regexFunc(element)
        
        if(result){
            possibleMatches.push(possibleSection);
        }
    }

    return possibleMatches;
}

function findGrammar(grammarChoice: string ): Array<PossibleElement>{
    for(let grammar of possibleGrammars){
        if(grammar.grammarName == grammarChoice){
            return grammar.possibleElements
        }
    }
    throw new Error("Can't find the appropiate grammer for that choice!");
}

// Checks that there isn't a duplicate type - for example 'dd-dd-yyyy' is invalid
function validMatch(matchElement: MatchElement): boolean{
    return matchElement.possibleMatch0.type != matchElement.possibleMatch1.type &&
            matchElement.possibleMatch0.type != matchElement.possibleMatch2.type &&
            matchElement.possibleMatch1.type != matchElement.possibleMatch2.type;
}   

export function parseDateString(dateString: string, grammarChoice: string): string[] | null {
    // Step 1: split the string into groups
    for(let possibleSplit of possibleSplits){
        possibleSplit.splitStringArray = dateString.split(possibleSplit.splitOn);
    }

    let finalSplit = possibleSplits.find((obj) => obj.splitStringArray?.length == 3);

    if (finalSplit == undefined) throw new Error("Unable to find appropiate split type!");

    let dateElements = finalSplit?.splitStringArray;

    // Needs to be date nicly split into three sections
    if(dateElements?.length != 3) return null;

    let possibleElements = findGrammar(grammarChoice)
    
    let elementMatches = Array<{
        element: string,
        possibleMatches: PossibleElement[]
    }>();

    // Step 2: try to match the elements of the split into their closest match
    for(let element of dateElements){
        let possibleMatches = matchElement(element, possibleElements);

        elementMatches.push({element, possibleMatches})
    }

    // There needs to be at least one match per each date element
    if(elementMatches.some((ele) => ele.possibleMatches.length < 1)) return null;

    var possibleStringFormats = new Array<string>();

    // Step 3: Iterate through all possible match configurations
    for(let possibleMatch0 of elementMatches[0].possibleMatches){
        for(let possibleMatch1 of elementMatches[1].possibleMatches){
            for(let possibleMatch2 of elementMatches[2].possibleMatches){
                // Only if the match configuration is valid, we can append the string
                if(validMatch({possibleMatch0, possibleMatch1, possibleMatch2})){
                    possibleStringFormats.push(`${possibleMatch0.formatSpecifier}${finalSplit.splitOn}${possibleMatch1.formatSpecifier}${finalSplit.splitOn}${possibleMatch2.formatSpecifier}`)
                }        
            }
        }
    }

    return possibleStringFormats;
}


/*
    Testing Suite
*/
const testSamples = [
    {
        data: "2021-2-1",
        isValid: true,
        result: ["yyyy-M-d", "yyyy-d-M"]

    },
    {
        data: "2021-02-01",
        isValid: true,
        result: ["yyyy-MM-dd", "yyyy-dd-MM"]

    },
    {
        data: "feb 28 0006",
        isValid: true,
        result: ["MMM dd yyyy", "MMM d yyyy"]

    },
    {
        data: "6/12/2021",
        isValid: true,
        result: ["M/d/2021", "M/dd/2021", "M/d/yyyy","M/dd/yyyy"]

    },
    {
        data: "06-06-2021",
        isValid: true,
        result: ["dd-MM-yyyy", "MM-dd-yyyy"]

    },
    {
        data: "06/12/98",
        isValid: true,
        result: ["dd/M/y","dd/M/yy","dd/MM/y","dd/MM/yy","MM/d/y","MM/d/yy","MM/dd/y","MM/dd/yy"]

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
        result: ["dd dddd yyyy"]

    },
    {
        data: "31 Fri 2",
        isValid: true,
        result: ["d mmm y","dd mmm y"]

    }
]


// console.log(parseDateString('6/12/2021'));
for(let sample of testSamples){
    let result = parseDateString(sample.data, "C#");

    if( result != null &&
        result.length === sample.result.length &&
        result.every((str) => result?.includes(str))
        ){
        console.log(`Pass for ${sample.data}`);
    }
    else{
        console.log(`Fail for ${sample.data}`);
        console.log(`${result} does not match ${sample.result}`);
    }
}