import lerp from './lerp';

const inverseLerp = function inverseLerp(min, max, amt) {
  return max - lerp(min, max, amt);
};

export default inverseLerp;
