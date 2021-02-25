// The day of the month, from 1 through 31.


function get_d(dateString){
    var x = /([1-3][0-9]|[1-9])/g
    var y = /(3[2-9])/g

    if(dateString.match(x) && !dateString.match(y)){
        return dateString.match(x);
    }

    return false;
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
    for(let possibleSection of possibleSections){

    }

    return [];
}



function parseDateString(dateString: string): string {
    
    // Step 1: split the string into groups
    for(let possibleSplit of possibleSplits){
        possibleSplit.splitStringArray = dateString.split(possibleSplit.splitOn);
    }

    let finalSplit = possibleSplits.find((obj) => obj.splitStringArray.length == 3);

    let dateElements = finalSplit.splitStringArray;
    
    // Step 2: try to match the elements of the split into their closest match
    for(let element of dateElements){
        console.log(element);
    }

    


    // for(section of possibleSections){
    //     console.log(section.regexFunc(dateString))
    // }
    
    return;
}

parseDateString("2021-02-01");

// console.log(get_d("p9403"));


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

