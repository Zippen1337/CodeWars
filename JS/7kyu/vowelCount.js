function getCount(str) {
    let count = 0;
    const matches = /[aeiou]/
    for (let i = 0; i < str.length; i++) {
      if (matches.test(str[i])) count++;
    }
    return count;
  }