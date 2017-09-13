const clamp = function clamp(value, minimum = 0.0, maximum = 1.0) {
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

clamp.array = function clampArray([value, min, max]) {
  return clamp(value, min, max);
};

clamp.obj = function clampObject({ value, min, max }) {
  return clamp(value, min, max);
};

export default clamp;
