window.onload = function () {
  const push_lb = document.getElementById('push_lb');

  push_lb.onmouseover = (e) => {
    document.documentElement.style.cssText = `
          --src1-bg: #199FB1;
          --push-flow-lb: #199FB1;
          --push-flow-lb-opacity: 1;
        `
  }

  push_lb.onmouseout = (e) => {
    document.documentElement.style.cssText = `
          --src1-bg: #0d5c75;
          --push-flow-lb: #FFFFFF;
          --push-flow-lb-opacity: 0;
        `
  }

  const push = document.getElementById('push');

  push.onmouseover = (e) => {
    document.documentElement.style.cssText = `
          --src2-bg: #199FB1;
          --push-flow: #199FB1;
          --push-flow-opacity: 1;
        `
  }

  push.onmouseout = (e) => {
    document.documentElement.style.cssText = `
          --src2-bg: #0d5c75;
          --push-flow: #FFFFFF;
          --push-flow-opacity: 0;
        `
  }

  const pull = document.getElementById('pull');

  pull.onmouseover = (e) => {
    document.documentElement.style.cssText = `
          --src3-bg: #199FB1;
          --pull-flow: #199FB1;
          --pull-flow-opacity: 1;
        `
  }

  pull.onmouseout = (e) => {
    document.documentElement.style.cssText = `
          --src3-bg: #0d5c75;
          --pull-flow: #FFFFFF;
          --pull-flow-opacity: 0;
        `
  }

  const workers = document.getElementById('workers');

  workers.onmouseover = (e) => {
    document.documentElement.style.cssText = `
          --cribl-worker-bg: #199FB1;
          --cribl-routes-bg: #199FB1;
        `
  }

  workers.onmouseout = (e) => {
    document.documentElement.style.cssText = `
          --cribl-worker-bg: #0d5c75;
          --cribl-routes-bg: #FFFFFF;
        `
  }

  const master = document.getElementById('master');

  master.onmouseover = (e) => {
    document.documentElement.style.cssText = `
          --cribl-master-bg: #199FB1;
          --cribl-leader-functions-bg: #199FB1;
        `
  }

  master.onmouseout = (e) => {
    document.documentElement.style.cssText = `
          --cribl-master-bg: #0d5c75;
          --cribl-leader-functions-bg: #FFFFFF;
        `
  }


};
