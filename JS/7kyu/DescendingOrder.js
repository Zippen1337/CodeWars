function descendingOrder(n){
    n = n.toString();
    let newN = '';
    let strArr = [];
    for (let i = 0; i < n.length; i ++) {
      strArr.push(Number(n[i]))
    }
    strArr.sort()
    strArr.reverse()
    for (let j = 0; j < strArr.length; j ++) {
      newN += strArr[j];
      }
    return Number(newN);
  }