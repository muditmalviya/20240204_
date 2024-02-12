/** Program to do subtraction of two given numbers. The given numbers
 *  will be in the form of array and we have to return the output in
 * the form of array only
 */

/** function to return the reverse of array 
 *  @param {Array} arrayList list of array
 *  @return {Array} the reversing og the given array
 */
function reverseArray(arrayList) {
    return arrayList.reverse();
}


/**
 * Function to check whether each value in an array is 
 * of number data type or not
 * @param {Any} value  
 * @returns the boolean value 
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

/** function to do subtraction of two given arrays
 *  @param {Array} number1 contains number1
 *  @param {Array} number2 contains number2
 *  @returns {Array} the subtraction done on number1 and number2 array
 */
function Subtraction(number1, number2) {

    // Check if arrays contain only numbers
    if (!number1.every(isNumber) || !number2.every(isNumber)) {
        throw new Error("Only number data type will be accepted here");
    }

    //defining the output array
    let output = [];

    // reversing both the array for the ease of traversing from right to left
    let reverseArray1 = reverseArray(number1);
    let reverseArray2 = reverseArray(number2);
    
    //taking the maximum length of array for end of traversal purpose
    let maxLength = Math.max(reverseArray1.length, reverseArray2.length);
    let borrow = 0;

    // If the second number is greater than the first, mark the result as negative
    let isNegative = false;
    if (reverseArray1.length < reverseArray2.length) 
    {
        /**
         * swapping the arrays if size of first array is smaller than second array
         * */
        [reverseArray1, reverseArray2] = [reverseArray2, reverseArray1];
        isNegative = true;
    } 
    /**
     * swapping the arrays if size of first array and second array is same and still the 
     * second array value is larger than the first array
     */
    else if (reverseArray1.length == reverseArray2.length)
    {
        for (let i = reverseArray1.length - 1; i >= 0; i--)
        {
            if (reverseArray1[i] < reverseArray2[i])
            {
                //swap arrays
                [reverseArray1, reverseArray2] = [reverseArray2, reverseArray1];
                isNegative = true;
                break;
            }
            else if (reverseArray1[i] > reverseArray2[i])
            {
                break;
            }
        }
    }

    for (let i = 0; i < maxLength; i++)
    {

        /** If while traversing any arrray values are over so to be saved from
         * null values OR operator will give us 0 value
         */
        let digit1 = reverseArray1[i] || 0; 
        let digit2 = reverseArray2[i] || 0;

        /**
         * Calculating the diffrence value then if the diffrence is in -ve 
         * making it +ve and updating the borrow and at last updating the output
         */
        let diff = digit1 - digit2 - borrow;

        if (diff < 0)
        {
            diff =diff+10;
            borrow = 1;
        }
        else
        {
            borrow = 0;
        }

        output.push(diff);
    }

    // If the result is negative, add a negative sign
    if (isNegative)
    {
        output[output.length - 1]*=-1;
    }

    // Removing the zero from the array in RHS that could come first after reversing
    while (output.length > 1 && output[output.length - 1] === 0)
    {
        output.pop();
    }

    // Return the output by reversing it;
    return reverseArray(output);
}

// Example usage
let num1 = [2];
let num2 =  [7,0];

/**
 * try block to smoothefully run the code if any error is 
 * encountered catch block will deal with it without stopping the code 
 */
try {
    let ans = Subtraction(num1, num2);
    console.log(ans);
} catch (error) {
    console.error(error.message);
}
