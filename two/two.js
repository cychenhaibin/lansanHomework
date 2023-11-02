/**
 * @param {number} x
 * @return {number}
 */



function reverse(x) {
  const INT32_MIN = -Math.pow(2, 31);
  const INT32_MAX = Math.pow(2, 31) - 1;
  
  let reversed = 0;
  
  while (x !== 0) {
    const digit = x % 10;
    x = Math.trunc(x / 10);
    
    // 检查溢出
    if (reversed > INT32_MAX / 10 || (reversed === INT32_MAX / 10 && digit > 7)) {
      return 0;
    }
    if (reversed < INT32_MIN / 10 || (reversed === INT32_MIN / 10 && digit < -8)) {
      return 0;
    }
    
    reversed = reversed * 10 + digit;
  }
  
  return reversed;
}

