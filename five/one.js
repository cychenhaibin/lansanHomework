function animateWithSetTimeout() {
  setTimeout(function() {
    // 第一步动画
    console.log('Step 1');

    setTimeout(function() {
      // 第二步动画
      console.log('Step 2');

      setTimeout(function() {
        // 第三步动画
        console.log('Step 3');
      }, 1000); // 间隔时间
    }, 1000); // 间隔时间
  }, 1000); // 初始延迟
}

animateWithSetTimeout();