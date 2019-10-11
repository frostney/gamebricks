import { requestAnimationFrame, performance } from 'animframe';

let loopEvents = {};
let pausedEvents = {};
const timers = [];

let isRunning = true;

export const run = () => {
  let time: number;

  (function loop() {
    requestAnimationFrame.call(window, loop);

    const now = performance.now();
    const dt = now - (time || now);

    time = now;

    if (!isRunning) {
      return;
    }

    timers.forEach((timer) => {
      timer.tick(now);
    });

    Object.keys(loopEvents).forEach((eventName) => {
      if (!pausedEvents[eventName]) {
        loopEvents[eventName](dt);
      }
    });
  }());
};

export const stop = () => {
  isRunning = false;
};

export const clear = () => {
  loopEvents = {};
  pausedEvents = {};
};

export const on = (taskName: string, taskFunction: () => void) => {
  loopEvents[taskName] = taskFunction;
  pausedEvents[taskName] = false;
};

export const off = (taskName: string) => {
  delete loopEvents[taskName];
  if (pausedEvents[taskName] != null) {
    delete pausedEvents[taskName];
  }
};

export const pause = (taskName: string) => {
  pausedEvents[taskName] = true;
};

export const resume = (taskName: string) => {
  if (taskName == null) {
    isRunning = true;
    return;
  }

  pausedEvents[taskName] = false;
};
