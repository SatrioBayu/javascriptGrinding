// Src = (https://www.hackerrank.com/challenges/js10-regexp-3/problem?isFullScreen=true)

// My Code
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    let re = new RegExp(/[0-9]+/g);
    return re;
}
