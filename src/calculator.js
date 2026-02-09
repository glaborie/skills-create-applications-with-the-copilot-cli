#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Adds two or more numbers
 * - Subtraction (-): Subtracts numbers
 * - Multiplication (×, *): Multiplies two or more numbers
 * - Division (÷, /): Divides numbers (handles division by zero)
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
    
    // Replace × with * and ÷ with / for evaluation
    const normalizedExpression = cleanExpression
      .replace(/×/g, '*')
      .replace(/÷/g, '/');
    
    // Validate expression (only allow numbers and basic operators)
    if (!/^[0-9+\-*/().]+$/.test(normalizedExpression)) {
      throw new Error('Invalid expression. Only numbers and operators (+, -, *, /) are allowed.');
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
    console.log('');
    console.log('Usage: node calculator.js "<expression>"');
    console.log('Example: node calculator.js "5 + 3"');
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
