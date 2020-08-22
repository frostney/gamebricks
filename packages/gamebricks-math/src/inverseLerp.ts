import lerp from './lerp';

const inverseLerp = function inverseLerp(min: number, max: number, amt: number): number {
  return max - lerp(min, max, amt);
};

export default inverseLerp;
