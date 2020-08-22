import { Vector2 } from '@gamebricks/vector';

class Rect {
  constructor(public x = 0, public y = 0, public w = 0, public h = 0) {

  }

  clone(): Rect {
    return new Rect(this.x, this.y, this.w, this.h);
  }

  toJSON() {
    return {x: this.x, y: this.y, w: this.w, h: this.h};
  }

  toString(): string {
    return JSON.stringify(this.toJSON());
  }

  static fromString(str: string): Rect {
    const {x, y, w, h} = JSON.parse(str);

    return new Rect(x, y, w, h);
  }

  center(): Vector2 {
    return new Vector2(this.x + (this.w / 2), this.y + (this.h / 2));
  }

  contains(vector: Vector2): boolean {
    return (vector.x >= this.x) && (vector.y >= this.y) && (vector.x < this.x + this.w) && (vector.y < this.y + this.h);
  }
}

export default Rect;
