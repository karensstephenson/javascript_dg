// // Regular Expressions

// /[enl]/g
// matches the characters e, n and l

// /[*enl]/g
// matches every character except e, n and l

// /[a-z]/g
// specifies a range (lower case letters)

// / /g
// g is a global 'flag' - matches all (not just first instance)

// /[a-z]/i
// case insensitive (matches upper and lower case)

// /[0-9]/g
// selects numbers

// /./g
// selects everything except the newline character

// /\w/g
// selects words (all letters, numbers and _)


// /\W/g
// selects every that is not considered a word character (spaces, ", etc)

// /\d/g
// selects digits

// /\D/g
// everything except digits

// /\s/g
// selects whitespace (includes tabs and line breaks)

// /\S/g
// selects everything except the whitespace

// /[\s\S]/g
// everything that is and isn't a space (everything!)

// /^I/gm
// selects every 'I' at the beginning of a line (use multiline flag (m))

// /d$/gm
// selects every 'd' that ends a line (use multiline flag (m))

// /\./gm
// \ escapes special characters

// /(old)/gm
// capture group - selects every instance of 'old'

// /(?:old)/gm
// non-capture group - specifying 'old' but not 'capturing' it???

// /g(?=old)/gm
// 'positive looking ahead': only selecting a 'g' when it is followed by 'old'

// /g(?!old)/gm
// 'negative looking ahead': only selecting a 'g' when it is NOT followed by 'old'

// /[A-z]\w+/
// selects a word beginning with a capital letter (if more than one character; capital letter with other letters following it)

// /[A-Z][a-z]*'*[a-z]*/gm
// selects every word that begins with a capital letter, including those with apostrophes (* means optional, zero or more)
// (starts with A-Z, then has an optional a-z, or an optional ', followed by an optional a-z)

// /\d{3}/gm
// selects three digits in a row

// /\d{3,}/gm
// selects three or more digits in a row

// /\d{3,4}/gm
// selects three or four digits in a row (min3, max4)

// /(hear)?t/gm
// selects 't' and 'hear' if present ('hear' is optional)

// /(hear)t/gm
// only selects 'heart'

// /h\w+/gm
// selects h and any letters/numbers after it in the same word

// /h\w+?/gm
// selects h and one word character after the h

// /(g|l)ive/gm
// selects both 'give' and 'live'


// zipcode
// 10001
// /(^\d{5}$)/gm
// selects something that starts with a digit and has only 5 numbers
// ^ = starts with; $ = ends with

// 10001-1234
// /(^\d{5})-?(\d{4}$)?/gm
// optional -1234
// -? = hyphen optional 
// (\d{4}$)? = four optional digits

// user input from e.g. a search box
// Kansas       City
// /\s{2,}/gm
// selects 2 or more spaces (\s = whitespace)

// //check for a valid phone number
// 8675309
// 867-5309
// 867.5309
// 867 5309
// 555-867-5309
// +1 555 867 5309
// /(\+1)?[-. ]?(\d{3})?[-. ]?(\d{3})[-. ]?(\d{4})/gm
// ? = optional


