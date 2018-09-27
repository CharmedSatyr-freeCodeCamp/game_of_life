import { coordinatesCalc } from './cellData.utils';
import * as c from '../constants/constants';

describe('coordinatesCalc', () => {
  it('should throw an error for non-number arguments', () => {
    expect(() => coordinatesCalc('octopus')).toThrow();
  });

  it('should return an array', () => {
    expect(coordinatesCalc(0)).toEqual(expect.any(Array));
  });

  it('should return zero-based x and y coordinates', () => {
    const expected = [0, 0];
    expect(coordinatesCalc(0)).toEqual(expect.arrayContaining(expected));
  });

  it('should calculate the correct x position of the last cell on the first row', () => {
    const expected = [c.gridWidth - 1, 0];
    expect(coordinatesCalc(c.gridWidth - 1)).toEqual(expected);
  });

  it('should reset the x axis on a new row', () => {
    const expected = [0, 1];
    expect(coordinatesCalc(c.gridWidth)).toEqual(expected);
  });

  it('should return the correct coordinates for the bottom right cell', () => {
    const last = c.gridWidth * c.gridHeight - 1;
    const expected = [c.gridWidth - 1, c.gridHeight - 1];
    expect(coordinatesCalc(last)).toEqual(expected);
  });
});
