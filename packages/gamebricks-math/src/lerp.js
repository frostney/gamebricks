import clamp from './clamp';

const lerp = function lerp(min, max, amt) {
  const tmpAmt = clamp(amt, 0.0, 1.0);
  const diff = Math.abs(max - min);

  if (diff === 0) {
    return min;
  }

  return min + (diff * tmpAmt);
};

export default lerp;
