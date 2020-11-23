let recursiveFactorial = function recursionFactorial(x) {
    if (x==1) return 1;
    return x*rec(x-1);
}

function factorial(x) {
    var result = 1;
    while(x>0) {
        result*=x;
        x--;
    }
    return result;
}

function fibonacci(x) {
    if (x <= 1) return x;
    return fibonacci(x-1) + fibonacci((x-2));
}

function checkPalindrome(str) {
    var s = str.toString().toLowerCase();
    var end = [s.length];
    var start = [s.length];
    for (i = 0,j=s.length-1;i<s.length;i++,j--) {
        start[i]=s[i];
        end[i]=s[j];
        if(start[i]!=end[i]) {
            return false;
        }
    }
    return true;
}


function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}

function findLongest(str) {
    str = str.split(' ');
    let longest = str[0];
    for (let i = 1; i < str.length; i++ ) {
        if(str[i].length > longest.length) {
            longest = str[i];
        }
    }
    return longest;
}

function checkPrime(x) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

function getType(x) {
    return typeof x;
}

function getSecondLargestAndLowest(arr) {
    let sorted_arr = arr.sort(function(a,b){return b-a});
    var secondLargest = sorted_arr[0];
    var secondLowest = sorted_arr[arr.length-2];
    return 'min = ' + secondLowest + ', max = ' + secondLargest;
}

function coinify(amount, coinArray) {
    let coins = [coinArray.length];
    for (let i = 0; i< coinArray.length; i++ ) {
        coins = Math.floor(amount / coinArray[i]);
        amount %= coinArray[i];
    }
    return values;
}

function binSearch(x, arr) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let cur = left + Math.floor((right - left) /2 );
        if(arr[cur] === x) return cur;
        if(x > arr[cur]) left = cur + 1;
        else right = cur - 1;
    }
    return -1;
}





console.log(fibonacci(12));
console.log(checkPalindrome('stoppots'));
console.log(alphabeticalOrder('dcba'));
console.log(findLongest('asn askdjnaskdjn sdjnsjd aen sdkgjsndg'));
var arr = [12,23,12323,12,1,5,12,123,12,1923,15,1,991];
console.log(getSecondLargestAndLowest(arr));