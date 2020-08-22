import { clamp } from '@gamebricks/math';

class Color {
  constructor(public r = 0, public g = 0, public b = 0, public a = 1) {

  }

  lighten(factor: number) {
    factor = clamp(factor, 0, 1);

    this.r = clamp(this.r + (factor * 255) | 0, 0, 255);
    this.g = clamp(this.g + (factor * 255) | 0, 0, 255);
    this.b = clamp(this.b + (factor * 255) | 0, 0, 255);
  }

  darken(factor: number) {
    factor = clamp(factor, 0, 1);

    this.r = clamp(this.r - (factor * 255) | 0, 0, 255);
    this.g = clamp(this.g - (factor * 255) | 0, 0, 255);
    this.b = clamp(this.b - (factor * 255) | 0, 0, 255);
  }

  fadeIn(factor: number) {
    factor = clamp(factor, 0, 1);

    this.a = this.a + this.a * factor;
    if (this.a > 1) {
      this.a = 1;
    }
  }

  fadeOut(factor: number) {
    factor = clamp(factor, 0, 1);

    this.a = this.a - this.a * factor;
    if (this.a < 0) {
      this.a = 0;
    }
  }

  toJSON() {
    if (this.a < 1) {
      if (this.a === 0) {
        return 'transparent';
      } else {
        return `rgba(${this.r},${this.g},${this.b},${this.a})`;
      }
    } else {
      return `rgb(${this.r},${this.g},${this.b})`;
    }
  }

  toString(): string {
    return this.toJSON();
  }

  toHex(): string {
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`;
  }

  // Getting a random color for debugging is quite useful sometimes
  static random(): Color {
    var col = [0, 0, 0];

    col = col.map(function() {
      return ~~(Math.random() * 255);
    });

    return new Color(col[0], col[1], col[2]);
  }
}

export default Color;
