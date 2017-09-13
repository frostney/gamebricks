import Vector2 from './Vector2';

class Rect {
  constructor(x = 0, y = 0, w = 0, h = 0) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  clone() {
    return new Rect({x: this.x, y: this.y, w: this.w, h: this.h});
  }

  toJSON() {
    return {x: this.x, y: this.y, w: this.w, h: this.h};
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }

  static fromString(str) {
    var obj = JSON.parse(str);

    return new Rect(obj.x, obj.y, obj.w, obj.h);
  }

  center() {
    return new Vector2(this.x + (this.w / 2), this.y + (this.h / 2));
  }

  contains(vector) {
    return (vector.x >= this.x) && (vector.y >= this.y) && (vector.x < this.x + this.w) && (vector.y < this.y + this.h);
  }
}

export default Rect;
