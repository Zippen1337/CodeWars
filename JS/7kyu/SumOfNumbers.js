function getSum(a, b)
{
  let sum = 0
  let max = Math.max(a,b)
  let min = Math.min(a,b)
  while (min<=max) {
    sum += min;
    min++
  }
  return sum
}