#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Adds two or more numbers
 * - Subtraction (-): Subtracts numbers
 * - Multiplication (×, *): Multiplies two or more numbers
 * - Division (÷, /): Divides numbers (handles division by zero)
 * - Modulo (%): Returns the remainder of division
 * - Exponentiation (^, **): Raises base to the power
 * - Square root (√, sqrt): Calculates the square root
 * 
 * Usage: node calculator.js <expression>
 * Example: node calculator.js "5 + 3"
 *          node calculator.js "10 / 2"
 *          node calculator.js "4 * 7"
 */

function calculate(expression) {
  try {
    // Remove whitespace
    const cleanExpression = expression.replace(/\s+/g, '');
    
    // Handle square root - support both √ symbol and sqrt() function
    // For √ symbol, match it followed by a number or expression in parentheses
    let normalizedExpression = cleanExpression
      .replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)')      // √(expression)
      .replace(/√(-?\d+\.?\d*)/g, 'Math.sqrt($1)');   // √number or √-number
    
    // Handle sqrt() function (but not if it's already Math.sqrt)
    normalizedExpression = normalizedExpression
      .replace(/(?<!Math\.)sqrt\(/g, 'Math.sqrt(');
    
    // Replace × with * and ÷ with / for evaluation
    normalizedExpression = normalizedExpression
      .replace(/×/g, '*')
      .replace(/÷/g, '/');
    
    // Replace ^ with ** for exponentiation
    normalizedExpression = normalizedExpression
      .replace(/\^/g, '**');
    
    // Check for square root of negative numbers before validation
    const sqrtMatches = normalizedExpression.match(/Math\.sqrt\(([^)]+)\)/g);
    if (sqrtMatches) {
      for (const match of sqrtMatches) {
        const innerExpr = match.replace('Math.sqrt(', '').replace(')', '');
        // Try to evaluate just the inner part to check if negative
        try {
          const value = eval(innerExpr);
          if (value < 0) {
            throw new Error('Square root of negative numbers is not allowed.');
          }
        } catch (e) {
          // If it's already our error, rethrow it
          if (e.message === 'Square root of negative numbers is not allowed.') {
            throw e;
          }
          // Otherwise, let it fail in the main evaluation
        }
      }
    }
    
    // Validate expression (allow numbers, basic operators, %, **, and Math.sqrt)
    if (!/^[0-9+\-*/%().]+$/.test(normalizedExpression.replace(/Math\.sqrt/g, ''))) {
      throw new Error('Invalid expression. Only numbers and operators (+, -, *, /, %, ^) are allowed.');
    }
    
    // Check for division by zero
    if (/\/\s*0(?![0-9])/.test(normalizedExpression)) {
      throw new Error('Division by zero is not allowed.');
    }
    
    // Evaluate the expression
    const result = eval(normalizedExpression);
    
    return result;
  } catch (error) {
    throw new Error(`Calculation error: ${error.message}`);
  }
}

// Main CLI logic
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Calculator CLI');
    console.log('');
    console.log('Supported operations:');
    console.log('  + : Addition');
    console.log('  - : Subtraction');
    console.log('  × or * : Multiplication');
    console.log('  ÷ or / : Division');
    console.log('  % : Modulo (remainder)');
    console.log('  ^ or ** : Exponentiation (power)');
    console.log('  √ or sqrt() : Square root');
    console.log('');
    console.log('Usage: node calculator.js "<expression>"');
    console.log('Example: node calculator.js "5 + 3"');
    console.log('Example: node calculator.js "5 % 2"');
    console.log('Example: node calculator.js "2 ^ 3"');
    console.log('Example: node calculator.js "√16"');
    process.exit(0);
  }
  
  const expression = args.join(' ');
  
  try {
    const result = calculate(expression);
    console.log(`${expression} = ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { calculate };
