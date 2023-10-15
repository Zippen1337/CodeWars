function disemvowel(str) {
    let newStr = '';
    const matches = /[aeiou]/i;
    for (let i = 0; i < str.length; i++) {
      if (!matches.test(str[i])) newStr += str[i];
    }
    return newStr;
  }