function func(query) {
    const mockInputs = {
        number: 2003,
        str: "Stage"
    };

    return new Promise(resolve => {
        setTimeout(() => resolve(mockInputs[query]), 100);
    });
}

function algorithmOddEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);  // Fixed template literal
    } else {
        console.log(`${number} is odd.`);  // Fixed template literal
    }
}

function algorithmPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function algorithmPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

async function main() {
    let number = parseInt(await func("number"), 10);
    let str = await func("str");

    algorithmOddEven(number);

    if (algorithmPrime(number)) {
        console.log(`${number} is a prime number.`);  // Fixed template literal
    } else {
        console.log(`${number} is not a prime number.`);  // Fixed template literal
    }

    if (algorithmPalindrome(str)) {
        console.log(`${str} is a palindrome.`);  // Fixed template literal
    } else {
        console.log(`${str} is not a palindrome.`);  // Fixed template literal
    }
}

main();
