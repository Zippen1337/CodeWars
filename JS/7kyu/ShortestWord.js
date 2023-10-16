function findShort(s){
    s = s.split(' ')
    let minString = 1000;
    for (let i = 0; i < s.length; i++) {
      if (minString > s[i].length) minString = s[i].length
    }
    return minString;
  }