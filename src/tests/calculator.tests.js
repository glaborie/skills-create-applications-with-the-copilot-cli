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

    test('5 % 2 should equal 1 (modulo)', () => {
      expect(calculate('5 % 2')).toBe(1);
    });

    test('2 ^ 3 should equal 8 (power)', () => {
      expect(calculate('2 ^ 3')).toBe(8);
    });

    test('√16 should equal 4 (square root)', () => {
      expect(calculate('√16')).toBe(4);
    });
  });

  // Modulo tests
  describe('Modulo', () => {
    test('should calculate 5 % 2 to equal 1', () => {
      expect(calculate('5 % 2')).toBe(1);
    });

    test('should calculate 10 % 3 to equal 1', () => {
      expect(calculate('10 % 3')).toBe(1);
    });

    test('should calculate 8 % 4 to equal 0', () => {
      expect(calculate('8 % 4')).toBe(0);
    });

    test('should calculate 15 % 7 to equal 1', () => {
      expect(calculate('15 % 7')).toBe(1);
    });

    test('should handle modulo with negative numbers', () => {
      expect(calculate('-10 % 3')).toBe(-1);
    });

    test('should handle modulo with decimal numbers', () => {
      expect(calculate('5.5 % 2')).toBeCloseTo(1.5, 2);
    });

    test('should handle zero remainder', () => {
      expect(calculate('100 % 10')).toBe(0);
    });

    test('should handle modulo where dividend is smaller', () => {
      expect(calculate('3 % 5')).toBe(3);
    });
  });

  // Exponentiation tests
  describe('Exponentiation', () => {
    test('should calculate 2 ^ 3 to equal 8', () => {
      expect(calculate('2 ^ 3')).toBe(8);
    });

    test('should calculate 2 ** 3 to equal 8 (using ** notation)', () => {
      expect(calculate('2 ** 3')).toBe(8);
    });

    test('should calculate 5 ^ 2 to equal 25', () => {
      expect(calculate('5 ^ 2')).toBe(25);
    });

    test('should calculate 10 ^ 0 to equal 1', () => {
      expect(calculate('10 ^ 0')).toBe(1);
    });

    test('should calculate 2 ^ 8 to equal 256', () => {
      expect(calculate('2 ^ 8')).toBe(256);
    });

    test('should handle negative exponents', () => {
      expect(calculate('2 ^ -2')).toBe(0.25);
    });

    test('should handle fractional exponents', () => {
      expect(calculate('4 ^ 0.5')).toBe(2);
    });

    test('should handle negative base with even exponent', () => {
      expect(calculate('(-2) ^ 2')).toBe(4);
    });

    test('should handle negative base with odd exponent', () => {
      expect(calculate('(-2) ^ 3')).toBe(-8);
    });

    test('should handle decimal bases', () => {
      expect(calculate('1.5 ^ 2')).toBe(2.25);
    });
  });

  // Square root tests
  describe('Square Root', () => {
    test('should calculate √16 to equal 4', () => {
      expect(calculate('√16')).toBe(4);
    });

    test('should calculate sqrt(16) to equal 4', () => {
      expect(calculate('sqrt(16)')).toBe(4);
    });

    test('should calculate √25 to equal 5', () => {
      expect(calculate('√25')).toBe(5);
    });

    test('should calculate √100 to equal 10', () => {
      expect(calculate('√100')).toBe(10);
    });

    test('should calculate √1 to equal 1', () => {
      expect(calculate('√1')).toBe(1);
    });

    test('should calculate √0 to equal 0', () => {
      expect(calculate('√0')).toBe(0);
    });

    test('should handle square root of decimal numbers', () => {
      expect(calculate('√2')).toBeCloseTo(1.414, 2);
    });

    test('should handle square root of large numbers', () => {
      expect(calculate('√144')).toBe(12);
    });

    test('should handle square root in expressions', () => {
      expect(calculate('√16 + 2')).toBe(6);
    });

    test('should throw error for square root of negative numbers', () => {
      expect(() => calculate('√-16')).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw error for sqrt(-1)', () => {
      expect(() => calculate('sqrt(-1)')).toThrow('Square root of negative numbers is not allowed');
    });
  });

  // Combined operations with new features
  describe('Combined Operations with New Features', () => {
    test('should handle modulo in complex expression', () => {
      expect(calculate('10 + 5 % 2')).toBe(11);
    });

    test('should handle exponentiation in complex expression', () => {
      expect(calculate('2 ^ 3 + 5')).toBe(13);
    });

    test('should handle square root in complex expression', () => {
      expect(calculate('√16 * 2')).toBe(8);
    });

    test('should handle all new operations together', () => {
      expect(calculate('√16 + 2 ^ 3 + 10 % 3')).toBe(13);
    });

    test('should follow order of operations with new features', () => {
      expect(calculate('2 + 3 ^ 2')).toBe(11);
    });

    test('should handle nested operations', () => {
      expect(calculate('(√16 + 1) * 2')).toBe(10);
    });
  });
});
