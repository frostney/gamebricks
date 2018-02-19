const sqrMagnitude = (v: Vector3): number => {
  return Vector3.dot(v, v);
};

class Vector3 {
  constructor(public x: number = 0, public y: number = 0, public z: number = 0) {

  }

  get magnitude(): number {
    return Math.sqrt(sqrMagnitude(this));
  }

  get sqrMagnitude(): number {
    return sqrMagnitude(this);
  }

  static dot(vec1: Vector3, vec2: Vector3): number {
    return vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;
  }

  static cross(vec1, vec2) {
    return new Vector3(vec1.y * vec2.z - vec2.y * vec1.z, vec1.z * vec2.x - vec2.z * vec1.x, vec1.x * vec2.y - vec2.x * vec1.y);
  }

  clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  toJSON() {
    return this.clone();
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }

  static fromJSON({ x, y, z }) {
    return new Vector3(x, y, z);
  }

  static fromString(str: string) {
    return Vector3.fromJSON(JSON.parse(str));
  }

  add(vector: Vector3) {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;

    return this;
  }

  subtract(vector: Vector3) {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;

    return this;
  }

  multiply(vector: Vector3) {
    this.x *= vector.x;
    this.y *= vector.y;
    this.z *= vector.z;

    return this;
  }

  divide(vector: Vector3) {
    this.x /= vector.x;
    this.y /= vector.y;
    this.z /= vector.z;

    return this;
  }

  normalize() {
    this.x = this.x / this.magnitude;
    this.y = this.y / this.magnitude;
    this.z = this.z / this.magnitude;

    return this;
  }

  equals(v: Vector3) {
    return (this.x === v.x && this.y === v.y && this.z === v.z);
  }

  static forward(): Vector3 {
    return new Vector3(0, 0, 1);
  }

  static right() {
    return new Vector3(1, 0, 0);
  }

  static one() {
    return new Vector3(1, 1, 1);
  }

  static up() {
    return new Vector3(0, 1, 0);
  }

  static zero() {
    return new Vector3(0, 0, 0);
  }
}

export default Vector3;
