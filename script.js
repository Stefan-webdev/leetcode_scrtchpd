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


//House Robber 1 Leetcode Problem. 
function rob(nums) {

    //handle edge cases
    if (!nums.length) return 0
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    for (let i=2; i<nums.length; i++) {
        nums[i] = Math.max(nums[i-2]+nums[i], (nums[i-3] || 0) +nums[i])

    }
return Math.max(nums[nums.length-1], nums[nums.length-2]);

     

};