function squareDigits(num){
    num = num.toString(10);
    let nums = '';
    for (let i = 0; i < num.length; i++) {
      nums += (Number(num[i])**2).toString(10);
    }
    return Number(nums);
  }