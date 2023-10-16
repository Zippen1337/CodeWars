// return masked string
function maskify(cc) {
    let newCc = '';
    for (let i = 0; i < cc.length; i++) {
      if (i+4 < cc.length) newCc += '#';
      else newCc += cc[i];
    }
    return newCc;
  }
  