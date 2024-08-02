function lengthOfLastWord(str) {
    // start by trimming the trailing spaces
    str = str.trim();
    //split the string into spaces
    const words = str.split(' ');
    // get the lastword
    const lastWord = words[words.length - 1]
    return lastWord.length;


    
};
console.log(lengthOfLastWord("last word"));