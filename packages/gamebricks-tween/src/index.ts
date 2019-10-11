import { EventEmitter } from 'events';
import bezier from 'bezier-easing';
import Loop from '@gamebricks/loop';

const css = {
  ease: bezier(0.25, 0.1, 0.25, 1.0),
  linear: bezier(0.00, 0.0, 1.00, 1.0),
  'ease-in': bezier(0.42, 0.0, 1.00, 1.0),
  'ease-out': bezier(0.00, 0.0, 0.58, 1.0),
  'ease-in-out': bezier(0.42, 0.0, 0.58, 1.0)
}

class Tween extends EventEmitter {
  target: any

  constructor() {
    super();

    this.target = null;
  }

  animate(property, end, time, easing) {
    if (this.target && typeof this.target[property] === 'number') {
      var start = this.target[property];

      if (start === end) {
        this.emit('start');
        this.emit('end');
        return;
      }

      easing = easing || 'linear';

      var timer = Loop.createTimer();

      timer.interval = time;

      timer.on('start', () => {
        this.emit('start');
      });

      timer.start();

      timer.on('tick', (ticks) => {
        var multiplicator = css[easing](ticks / (timer.startTime + timer.interval));
        var points = (end - start) * multiplicator;

        if (points > end) {
          points = end;
        }

        this.target[property] = points;
        this.emit('animate', points);
      });

      timer.on('interval', () => {
        timer.stop();
        this.target[property] = end;
        this.emit('end');
      });

    }
  }
}

export default Tween;
