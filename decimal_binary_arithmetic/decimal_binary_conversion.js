/**
* Converts a two's complement binary representation to its decimal equivalent
*
* @param {Array} binaryArray - An array of 0s and 1s representing a binary number
* @param {boolean}- Indicates whether the binary representation includes a sign bit
* @returns {number} The decimal equivalent of the binary number
* @throws {TypeError} If the input is not an array or contains elements other than 0 and 1
*/
function twosComplementToDecimal(binaryArray, signBitExists = true) {
    // Validate input types
    if (!Array.isArray(binaryArray)) {
      throw new TypeError('Error: Input must be an array.');
    }
   
    // Handle sign bit if present
    if (signBitExists) {
      // Remove the sign bit from the beginning of the array
      const signBit = binaryArray.shift();
   
      // If the sign bit is 1 a negative number
      if (signBit === 1) {
        // Convert the remaining bits to decimal using unsignedBinaryToDecimal
        const decimalValue = unsignedBinaryToDecimal(binaryArray);
   
        // Negate the decimal value and subtract 1 to get the two's complement
        return -1 * decimalValue - 1;
      }
    }
   
    // If there no sign bit or  0 treat it as an unsigned binary number
    return unsignedBinaryToDecimal(binaryArray);
   }
   
   /**
   * Converts an array of 0s and 1s to its decimal equivalent, assuming an unsigned binary representation.
   *
   * @param {Array} binaryArray - An array of 0s and 1s representing a binary number.
   * @returns {number} The decimal equivalent of the binary number.
   * @throws {TypeError} If the input is not an array or contains elements other than 0 and 1.
   */
   function unsignedBinaryToDecimal(binaryArray) {
    // Validate input types
    if (!Array.isArray(binaryArray)) {
      throw new TypeError('Error: Input must be an array.');
    }
   
    // Initialize a variable to store the decimal value
    let decimal = 0;

    // Iterate through each bit in the binary array
    for (let i = 0; i < binaryArray.length; i++) {
      const bit = binaryArray[i];
   
      // Ensure the bit is either 0 or 1
      if (bit !== 0 && bit !== 1) {
        throw new TypeError('Error: Input array must contain only 0s and 1s.');
      }
   
      // Calculate the decimal value by multiplying the bit by its corresponding power of 2
      // and adding it to the accumulator
      decimal += bit * Math.pow(2, binaryArray.length - 1 - i);
    }
   
    // Return the calculated decimal value
    return decimal;
   }
   
   // to Test
   console.log(twosComplementToDecimal([0, 1, 1, 1, 1], true));
   
