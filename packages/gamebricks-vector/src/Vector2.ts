const sqrMagnitude = (v: Vector2): number => Vector2.dot(v, v);

class Vector2 {
  constructor(public x: number = 0, public y: number = 0) {

  }

  get magnitude(): number {
    return Math.sqrt(sqrMagnitude(this));
  }

  get sqrMagnitude(): number {
    return sqrMagnitude(this);
  }

  get angle(): number {
    return Math.atan2(this.x, this.y);
  }

  static dot(vec1: Vector2, vec2: Vector2): number {
    return vec1.x * vec2.x + vec1.y * vec2.y;
  }

  static fromAngle(angle: number, magnitude: number): Vector2 {
    return new Vector2(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
  }

  toJSON() {
    return this.clone();
  }

  toString(): string {
    return JSON.stringify(this.toJSON());
  }

  static fromJSON({ x, y }): Vector2 {
    return new Vector2(x, y);
  }

  static fromString(str: string): Vector2 {
    return Vector2.fromJSON(JSON.parse(str));
  }

  clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }

  add(vector: Vector2) {
    this.x += vector.x;
    this.y += vector.y;

    return this;
  }

  subtract(vector: Vector2) {
    this.x -= vector.x;
    this.y -= vector.y;

    return this;
  }

  multiply(vector: Vector2) {
    this.x *= vector.x;
    this.y *= vector.y;

    return this;
  }

  divide(vector: Vector2) {
    this.x /= vector.x;
    this.y /= vector.y;

    return this;
  }

  normalize() {
    this.x = this.x / this.magnitude;
    this.y = this.y / this.magnitude;

    return this;
  }

  equals(v: Vector2): boolean {
    return (this.x === v.x && this.y === v.y);
  }
}

export default Vector2;
