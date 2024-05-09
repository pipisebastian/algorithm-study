// 최소 공배수는 두 수의 곱을 그 두 수의 최대 공약수로 나눈 것과 같다.
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 유클리드 호제법
const gcd = (a, b) => {
  while (a % b !== 0) {
    [a, b] = [b, a % b];
  }
  return b;
};

/* 수 하나식 판별
const gcd = (a, b) => {
  let result = 1;
  while (true) {
    if (result % a === 0 && result % b === 0) {
      return result;
    }
    result += 1;
  }
};
const lcm = (a, b) => {
  let result = a > b ? a : b;
  while (true) {
    if (a % result === 0 && b % result === 0) {
      return result;
    }
    result -= 1;
  }
}; 
*/
