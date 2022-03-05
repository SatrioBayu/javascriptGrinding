// src = Day 7 Regular Expression II (https://www.hackerrank.com/domains/tutorials/10-days-of-javascript)

// My Code
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re = new RegExp(/\b(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.).*[a-z]?.*[^\.]$/)
    
    /*
     * Do not remove the return statement
     */
    return re;
}
