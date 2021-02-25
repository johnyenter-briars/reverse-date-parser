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

function get_yyyy(dateString: string){
    return [];
}


let possibleSections:{  sectionName: string, 
                        formatSpecifier: string, 
                        regexFunc: Function,
                        currentValue: string }[] 
= [
    {
        sectionName: "day_of_month",
        formatSpecifier: "d",
        regexFunc: get_d,
        currentValue: null
    },
    {
        sectionName: "day_of_month_two_digits",
        formatSpecifier: "dd",
        regexFunc: get_dd,
        currentValue: null
    },
    // {
    //     sectionName: "day_of_month_two_digits",
    //     formatSpecifier: "dd",
    //     regexFunc: get_dd,
    //     currentValue: null
    // }
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




// const fourDigitYear = /\d{4}/g;


// function findFourDigitYear(dateString) {
//     var result = dateString.match(fourDigitYear);

//     if(result && result.length == 1){
//         return result[0];
//     }
//     return false;
// }

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



function parseDateString(dateString: string): string {
    // Step 1: split the string into groups
    for(let possibleSplit of possibleSplits){
        possibleSplit.splitStringArray = dateString.split(possibleSplit.splitOn);
    }

    let finalSplit = possibleSplits.find((obj) => obj.splitStringArray.length == 3);

    let dateElements = finalSplit.splitStringArray;
    
    let elementMatches = [];
    // Step 2: try to match the elements of the split into their closest match
    for(let element of dateElements){
        let possibleMatches = matchElement(element);

        elementMatches.push({element, possibleMatches})
    }

    // console.log(elementMatches);

    console.log(elementMatches[2].possibleMatches)

    


    // for(section of possibleSections){
    //     console.log(section.regexFunc(dateString))
    // }
    
    return;
}

parseDateString("2021-02-01");

// console.log(get_d("p9403"));
// console.log(get_d("01"));
// console.log(get_d("08"));
// console.log(get_d("1"));
// console.log(get_d("11"));
// console.log(get_d("25"));
// console.log(get_d("32"));
// console.log(get_d("37"));
// console.log(get_d("58"));
// console.log(get_dd("01"));
// console.log(get_dd("08"));
// console.log(get_dd("1"));
// console.log(get_dd("9"));
// console.log(get_dd("11"));
// console.log(get_dd("25"));
// console.log(get_dd("31"));
// console.log(get_dd("32"));
// console.log(get_dd("37"));
// console.log(get_dd("58"));



let testSamples = [
    {
        data: "2021-2-1",
        isValid: true,
        result: "yyyy-M-d"

    },
    {
        data: "2021-02-01",
        isValid: true,
        result: "yyyy-MM-dd"

    },
    {
        data: "July 31st, 2021",
        isValid: true,
        result: true

    },
    {
        data: "6/12/2021",
        isValid: true,
        result: true

    },
    {
        data: "06-06-2021",
        isValid: true,
        result: true

    },
    {
        data: "06/12/98",
        isValid: true,
        result: true

    }
]

