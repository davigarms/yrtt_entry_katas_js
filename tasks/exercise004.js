// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    // You code here!
    var words = str.split(" ");
    var pigLatinWord = ""
    for (var i = 0; i < words.length; i++) {
        for (var j = words[i].length - 1; j >= 0; j-- ) {
            var lastindex = j;
            var letter = words[i].slice(j,j+1);
            if (!(/[!?.,:;]/i).test(letter)) break;
        }
        pigLatinWord += words[i].slice(1, lastindex + 1) + words[i].slice(0,1) + "ay" + words[i].slice(lastindex + 1);
        if (i < words.length - 1) pigLatinWord += " ";
    }
    return pigLatinWord;
}

module.exports = {
    pigLatin
};