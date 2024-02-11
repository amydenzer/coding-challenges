//It's pretty straightforward. Your goal is to create a function that removes the first and last characthers of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

//inputs are a single string, with at least two characters.
//The same string returned without the first and last characters.

//look at text examples

//slice the first and last char by identifying their indexes ( is it indices? sp) and/or brute force with a loop.

//talk through examples. All of the strings are going to be a different length so we can't hard code a value here. We're going to have to find a different way.


function removeChar(str){
    return str.substring(1, str.length - 1)
};

