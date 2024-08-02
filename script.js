//function lengthOfLastWord(str) {
    /* start by trimming the trailing spaces
    str = str.trim();
    //split the string into spaces
    const words = str.split(' ');
    // get the lastword
    const lastWord = words[words.length - 1]
    return lastWord.length;


    
};
console.log(lengthOfLastWord("last word"));

*/ 

let books = [`Happy Book`, `Sad Book`, `Jipper Book`, `Miera Book`];

let oneBook = {
    title: `Miera Book`,
    author: `Miera Dog`,
    publisher: `Woofing Press`

}
function loopthroughBooks(books){
    for(let i = 0; i < books.length; i++){
    
        console.log(books[i])
    }

}

//loopthroughBooks(books)

function loopThroughObj(obj){
    for(let key in obj){
        console.log(key)
        console.log(obj[key])
    }
}

loopThroughObj(oneBook)