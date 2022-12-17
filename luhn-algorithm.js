const validCard = num => {
    const arr = (num + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    const lastDigit = arr.shift();
    let sum = arr.reduce(
      (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)),0);
   
    sum += lastDigit;
    if (sum % 10 === 0) {
        console.log("The card number is valid")
        return true
    } else {
        console.log("The card number is not valid")
        return false
    }

  };

// Test Cases:
validCard(1234567890123456); //should be false
validCard(4408041234567893); //should be true
validCard(38520000023237); //should be true
validCard(4222222222222); //should be true