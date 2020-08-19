import {EventEmitter} from 'events';
import {performance} from 'animframe';

class Timer extends EventEmitter {
  startTime: number
  active: boolean
  paused: boolean
  tick: (currentTime: number) => void

  constructor(public interval: number = 1000) {
    super();

    this.startTime = -1;

    this.active = false;
    this.paused = false;

    var oldTicks = 0;

    this.tick = (currentTime: number) => {
      if (!this.active || this.paused) {
        return;
      }

      if (interval <= 0) {
        return;
      }

      this.emit('tick', currentTime);

      if ((currentTime - this.startTime - this.interval) > oldTicks) {
        oldTicks = currentTime;
        this.emit('interval');
      }
    };
  }

  start() {
    this.active = true;
    this.paused = false;

    this.startTime = performance.now();

    this.emit('start');
  }

  pause() {
    this.paused = true;

    this.emit('pause');
  }

  unpause() {
    this.paused = false;

    this.emit('unpause');
  }

  stop() {
    this.paused = false;
    this.active = false;

    this.emit('stop');
  }
}

export default Timer;
