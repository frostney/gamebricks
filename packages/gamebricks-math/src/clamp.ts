export default function clamp(value: number, minimum: number = 0.0, maximum: number = 1.0): number {
  let [min, max] = [minimum, maximum];

  if (min > max) {
    [min, max] = [max, min];
  }

  if ((min <= value && value <= max)) {
    return value;
  }

  if (value > max) {
    return max;
  }

  return min;
};

