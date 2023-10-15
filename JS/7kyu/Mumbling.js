function accum(s) {
    let newStr = '';
      for (let i = 0; i < s.length; i++) {
      let j = 0;
      newStr += s[i].toUpperCase();
      while (j < i) {
        newStr += s[i].toLowerCase();
        j++;
      }
      if (i!==s.length-1) newStr += '-';
    }
    return newStr;
  }