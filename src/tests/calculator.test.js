const { calculate } = require('../calculator');

describe('Calculator Basic Operations', () => {
  
  // Addition tests
  describe('Addition', () => {
    test('should add 2 + 3 to equal 5', () => {
      expect(calculate('2 + 3')).toBe(5);
    });

    test('should add positive numbers', () => {
      expect(calculate('10 + 20')).toBe(30);
    });

    test('should add negative numbers', () => {
      expect(calculate('-5 + -3')).toBe(-8);
    });

    test('should add mixed positive and negative numbers', () => {
      expect(calculate('10 + -5')).toBe(5);
    });

    test('should add decimal numbers', () => {
      expect(calculate('2.5 + 3.5')).toBe(6);
    });

    test('should add multiple numbers', () => {
      expect(calculate('1 + 2 + 3 + 4')).toBe(10);
    });
  });

  // Subtraction tests
  describe('Subtraction', () => {
    test('should subtract 10 - 4 to equal 6', () => {
      expect(calculate('10 - 4')).toBe(6);
    });

    test('should subtract positive numbers', () => {
      expect(calculate('50 - 25')).toBe(25);
    });

    test('should subtract negative numbers', () => {
      expect(calculate('10 - (-5)')).toBe(15);
    });

    test('should subtract decimal numbers', () => {
      expect(calculate('7.5 - 2.5')).toBe(5);
    });

    test('should handle negative results', () => {
      expect(calculate('5 - 10')).toBe(-5);
    });

    test('should subtract multiple numbers', () => {
      expect(calculate('100 - 20 - 30')).toBe(50);
    });
  });

  // Multiplication tests
  describe('Multiplication', () => {
    test('should multiply 45 * 2 to equal 90', () => {
      expect(calculate('45 * 2')).toBe(90);
    });

    test('should multiply positive numbers', () => {
      expect(calculate('6 * 7')).toBe(42);
    });

    test('should multiply negative numbers', () => {
      expect(calculate('-3 * -4')).toBe(12);
    });

    test('should multiply mixed positive and negative numbers', () => {
      expect(calculate('5 * -3')).toBe(-15);
    });

    test('should multiply decimal numbers', () => {
      expect(calculate('2.5 * 4')).toBe(10);
    });

    test('should multiply by zero', () => {
      expect(calculate('100 * 0')).toBe(0);
    });

    test('should multiply multiple numbers', () => {
      expect(calculate('2 * 3 * 4')).toBe(24);
    });

    test('should handle multiplication with × symbol', () => {
      expect(calculate('5 × 3')).toBe(15);
    });
  });

  // Division tests
  describe('Division', () => {
    test('should divide 20 / 5 to equal 4', () => {
      expect(calculate('20 / 5')).toBe(4);
    });

    test('should divide positive numbers', () => {
      expect(calculate('100 / 4')).toBe(25);
    });

    test('should divide negative numbers', () => {
      expect(calculate('-12 / -3')).toBe(4);
    });

    test('should divide mixed positive and negative numbers', () => {
      expect(calculate('15 / -3')).toBe(-5);
    });

    test('should divide decimal numbers', () => {
      expect(calculate('7.5 / 2.5')).toBe(3);
    });

    test('should handle division with remainder', () => {
      expect(calculate('10 / 3')).toBeCloseTo(3.333, 2);
    });

    test('should handle division with ÷ symbol', () => {
      expect(calculate('20 ÷ 4')).toBe(5);
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    test('should throw error for division by zero', () => {
      expect(() => calculate('10 / 0')).toThrow('Division by zero is not allowed');
    });

    test('should throw error for invalid characters', () => {
      expect(() => calculate('10 & 5')).toThrow('Invalid expression');
    });

    test('should handle expressions with parentheses', () => {
      expect(calculate('(2 + 3) * 4')).toBe(20);
    });

    test('should follow order of operations', () => {
      expect(calculate('2 + 3 * 4')).toBe(14);
    });

    test('should handle complex expressions', () => {
      expect(calculate('(10 + 5) * 2 - 8 / 4')).toBe(28);
    });

    test('should handle expressions with spaces', () => {
      expect(calculate('  10  +  5  ')).toBe(15);
    });

    test('should handle expressions without spaces', () => {
      expect(calculate('10+5')).toBe(15);
    });
  });

  // All operations from the image
  describe('Image Operations Examples', () => {
    test('2 + 3 should equal 5', () => {
      expect(calculate('2 + 3')).toBe(5);
    });

    test('10 - 4 should equal 6', () => {
      expect(calculate('10 - 4')).toBe(6);
    });

    test('45 * 2 should equal 90', () => {
      expect(calculate('45 * 2')).toBe(90);
    });

    test('20 / 5 should equal 4', () => {
      expect(calculate('20 / 5')).toBe(4);
    });
  });
});
