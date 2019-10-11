import clamp from './clamp';

export default function lerp(min: number, max: number, amt: number): number {
  const tmpAmt = clamp(amt, 0.0, 1.0);
  const diff = Math.abs(max - min);

  if (diff === 0) {
    return min;
  }

  return min + (diff * tmpAmt);
};
