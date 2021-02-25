// Matches date elements like '1', '7', '27'
function get_d(dateString: string): Array<String>{
    var regexp = new RegExp('^([1-3][0-9]|[1-9])$'),
        regexp2 = new RegExp('^(3[2-9])$');

    if(regexp.test(dateString) && !regexp2.test(dateString)){
        return regexp.exec(dateString);
    }
    return null;
}

// Matches date elements like '01', '06', '31'
function get_dd(dateString: string): Array<String>{
    if(dateString.length != 2) return null;

    var regexp = new RegExp('^([0-3][0-9])$'),
        regexp2 = new RegExp('^([3-9][2-9])$');

    if(regexp.test(dateString) && !regexp2.test(dateString)){
        return regexp.exec(dateString);
    }
    return null;
}

// Matches date elements like '2021', '0001', '9999'
function get_yyyy(dateString: string){
    var regexp = new RegExp('^[0-9]{4}$');

    if(regexp.test(dateString)){
        return regexp.exec(dateString);
    }
    return null;
}

// Matches date elements like '01', '08', '12'
function get_MM(dateString: string){
    if(dateString.length != 2) return null;

    var regexp = new RegExp('^[0-2][1-9]$'),
        regexp2 = new RegExp('^[1-9][3-9]$');

    if(regexp.test(dateString) && !regexp2.test(dateString)){
        return regexp.exec(dateString);
    }
    return null;
}


let possibleSections:{  sectionName: string, 
                        formatSpecifier: string, 
                        regexFunc: Function,
                        currentValue: string,
                        type: string }[] 
= [
    {
        sectionName: "day_of_month",
        formatSpecifier: "d",
        regexFunc: get_d,
        currentValue: null,
        type: "day"
    },
    {
        sectionName: "day_of_month_two_digits",
        formatSpecifier: "dd",
        regexFunc: get_dd,
        currentValue: null,
        type: "day"
    },
    {
        sectionName: "month_two_digits",
        formatSpecifier: "MM",
        regexFunc: get_MM,
        currentValue: null,
        type: "month"
    },
    {
        sectionName: "year_four_digits",
        formatSpecifier: "yyyy",
        regexFunc: get_yyyy,
        currentValue: null,
        type: "year"
    }
]

let possibleSplits:{    splitName: string,
                        splitOn: string,
                        splitStringArray: Array<string>
                    }[] 
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

// Returns an array of possible character codes the given element string COULD represent
function matchElement(element: string): Array<string>{
    var possibleMatches = new Array();
    
    for(let possibleSection of possibleSections){
        var result = possibleSection.regexFunc(element)
        
        if(result){
            possibleMatches.push(possibleSection);
        }
    }

    return possibleMatches;
}

// Checks that there isn't a duplicate type - for example 'dd-dd-yyyy' is invalid
function validMatch(matchElement: any): boolean{
    return matchElement.possibleMatch0.type != matchElement.possibleMatch1.type &&
            matchElement.possibleMatch0.type != matchElement.possibleMatch2.type &&
            matchElement.possibleMatch1.type != matchElement.possibleMatch2.type;
}   


function removeInvalidMatchElements(possibleMatches: any){
    var sanitizedMatches = [];

    for(let matchPossibility of possibleMatches){
        if(validMatch(matchPossibility)){
            sanitizedMatches.push(matchPossibility);
        }
    }

    return sanitizedMatches;
}

function parseDateString(dateString: string): Array<string> {
    // Step 1: split the string into groups
    for(let possibleSplit of possibleSplits){
        possibleSplit.splitStringArray = dateString.split(possibleSplit.splitOn);
    }

    let finalSplit = possibleSplits.find((obj) => obj.splitStringArray.length == 3);

    let dateElements = finalSplit.splitStringArray;

    // Needs to be date nicly split into three sections
    if(dateElements.length != 3) return null;
    
    let elementMatches = [];
    // Step 2: try to match the elements of the split into their closest match
    for(let element of dateElements){
        let possibleMatches = matchElement(element);

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

// Testing suite
let testSamples = [
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
        data: "July 31st, 2021",
        isValid: true,
        result: ["MMM ddst, yyyy"]

    },
    {
        data: "6/12/2021",
        isValid: true,
        result: ["m/d/2021", "m/dd/2021"]

    },
    {
        data: "06-06-2021",
        isValid: true,
        result: ["dd-mm-yyyy", "mm-dd-yyyy"]

    },
    {
        data: "06/12/98",
        isValid: true,
        result: ["mm/dd/yy", "dd/mm/yy"]

    }
]

for(let sample of testSamples){
    let result = parseDateString(sample.data);

    if(result != null &&
        result.length === sample.result.length &&
        result.every((str) => result.includes(str))
        ){
        console.log(`Pass for ${sample.data}`);
    }
    else{
        console.log(`Fail for ${sample.data}`);
        console.log(`${result} does not match ${sample.result}`);
    }
}

