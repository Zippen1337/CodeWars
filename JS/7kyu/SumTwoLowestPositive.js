function sumTwoSmallestNumbers(numbers) {  
    const a = Math.min(...numbers)
    numbers.splice(numbers.indexOf(a),1);
    const b = Math.min(...numbers)
    return a+b;
  }