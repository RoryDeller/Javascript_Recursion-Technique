/*console.log('Hello!');

function printList(array, n = 0){
    if (n < array.length){
        console.log(array[n]);
        printList(array, n + 1);
    }
}

printList([10,20,30,40,50,60,70,80]);*/

function Palindrome(array, n = 0){
    if(n == array.length - n){
        console.log("match");
        return true;
    }

    if (array[n] !== array[array.length - 1 - n]) {
        console.log("Not a palindrome because a pair of letters don't match.")
        return false;
    }

    return Palindrome(array, n + 1);
}
Palindrome("hannah");