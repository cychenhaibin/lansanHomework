// 防抖函数：
function debounce(func, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


// 节流函数：
function throttle(func, delay) {
  let throttled = false;

  return function (...args) {
    if (!throttled) {
      func.apply(this, args);
      throttled = true;
      setTimeout(() => {
        throttled = false;
      }, delay);
    }
  };
}


