function highAndLow(numbers){
    let numArr = [];
    numbers = numbers.split(' ');
    for (let i = 0; i < numbers.length; i++) numArr.push(Number(numbers[i]))
    const maxMin = '' + Math.max(...numArr) + ' ' + Math.min(...numArr);
    return maxMin;
  }