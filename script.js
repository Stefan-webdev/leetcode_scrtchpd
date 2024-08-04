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
    if (!nums.length) return 0 // if there are no numbers in the array, the maximum sum is `0`
    if (nums.length === 1) return nums[0]; // if there is only 1 number in the array, the maximum sum is that number itself
    if (nums.length === 2) return Math.max(nums[0], nums[1]); // If there are 2 numbers in the array, the maximum sum is the larger of the two. 

    for (let i=2; i<nums.length; i++) {
        nums[i] = Math.max(nums[i-2]+nums[i], (nums[i-3] || 0) +nums[i])
// step. 1starting at index 2 the 3rd num, nums[i-2]+nums[i]; (ensures we are not adding 2 nums that are next to each other)
// step 2. Adds number at `i` with the num 3 positions before it nums[i-3] || 0) + nums[i] or default to 0 if no num 3 positions before.
// step 2.cont. Math.max takes the maximum of these two sums and stores it back at list position `i`
// Step 3. Finally, the code returns the largest sum from the last two numbers in the list:
// step 3. cont. return Math.max.... nums[nums.length-1] is the last number in the list.
// step 3 cont return nums[nums.length-2] is the second to last number
// this logic in the return statement ensures the max sum possible without adding the 2 adjacent nums. 

    }
return Math.max(nums[nums.length-1], nums[nums.length-2]);



     

};