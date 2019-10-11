import Vector2 from './Vector2';

describe('Given a `Vector2` class', function () {
    var vector = new Vector2();

    it('can be instantiated', function () {
        expect(vector instanceof Vector2).toBe(true);
      });

      it('will reflect default values', function() {
        expect(typeof vector.x).toBe('number');
        expect(typeof vector.y).toBe('number');
  
        expect(vector.x).toEqual(0);
        expect(vector.y).toEqual(0);
      });
  
      it('will be able to have custom values', function() {
        var vector = new Vector2(10, 10);
  
        expect(typeof vector.x).toBe('number');
        expect(typeof vector.y).toBe('number');
  
        expect(vector.x).toEqual(10);
        expect(vector.y).toEqual(10);
      });

});
