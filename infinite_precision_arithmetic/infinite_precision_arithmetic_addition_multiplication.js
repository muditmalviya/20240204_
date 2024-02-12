/** Program to do addition of two given numbers. The given numbers
 *  will be in the form of array and we have to return the output in
 * the form of array only
 */

/** function to return the reverse of array 
 *  @param {Array} arrayList list of array
 *  @return {Array} array after reversing 
 */
function reverseArray(arrayList) {
    return arrayList.reverse();
}


/**
 * Function to check whether each value in an array is 
 * of number data type or not
 * @param {Any} value  
 * @returns the boolean value that value is Number or not
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value) && (value>='0' && value<='9');
}



/** function to do addition of two given array
 *  @param {Array} number1 contains number1
 *  @param {Array} number2 contains number2
 *  @returns {Array} addition of number1 and number2 array
 */
function Addition(number1, number2) {
    // Check if arrays contain only numbers
    if (!number1.every(isNumber) || !number2.every(isNumber)) {
        throw new Error("Please enter datatype NUmbers in array only and numbers between 0 to 9");
    }

    //reversing both the arrays
    let output = new Array();
    let reverseArray1 = reverseArray(number1);
    let reverseArray2 = reverseArray(number2);
    let i = 0, carry = 0;

    /**
     * Traversing both the array till the condition is satisfied 
     * and inserting the correct value in the output array
     */
    while (i < reverseArray1.length && i < reverseArray2.length) {
        let temp = reverseArray1[i] + reverseArray2[i] + carry;
        carry = Math.floor(temp / 10);
        let put = temp % 10;
        output[i] = put;
        i++;
    }

    /**
     * If any of the array is of shorter size than another then to consider 
     * the values of larger array loops will add in the output array
     */
    if (i < reverseArray1.length) {
        while (i < reverseArray1.length) {
            let temp = reverseArray1[i] + carry;
            carry = Math.floor(temp / 10);
            let put = temp % 10;
            output[i] = put;
            i++;
        }
    } else {
        while (i < reverseArray2.length) {
            let temp = reverseArray2[i] + carry;
            carry = Math.floor(temp / 10);
            let put = temp % 10;
            output[i] = put;
            i++;
        }
    }

    /**
     * If both the array are fully traversed and still the carry is present
     * then at the last index of output carry is placed 
     */
    if (carry > 0) {
        output[i] = carry;
    }

    //reversing the output array to get the desired result
    let finalOutput = reverseArray(output);
    return finalOutput;
}



let num1 = [3, 6];
let num2 = [4];

/**
 * try block to smoothefully run the code if any error is 
 * encountered catch block will deal with it without stopping the code 
 */
try
{
    let ans = Addition(num1, num2);
    console.log("Addition answer is ", ans);
}
 catch (error)
{
    console.error(error.message);
}



/**Multiplication of two numbers given in array and then return the answer in
 * array only
 * @param {Array} num1Array first array
 * @param {Array} num2Array second array 
 * @returns {Array} returns the multiplication of 1.st and 2.nd array 
 */
function Multiplication(num1Array, num2Array) {

    // Check if arrays contain only numbers otherwise throws an error
    if (!num1Array.every(isNumber) || !num2Array.every(isNumber))
    {
        throw new Error("Please enter datatype NUmbers in array only and numbers between 0 to 9");
    }

    //contains the multiplication ans
    let result = [0];

    // Iteration of each digit of the second array
    /**
     * Here i is representing second array each digit from most RHS
     * and j is representing the first array each digit from most RHS
     */
    for (let i = num2Array.length - 1; i >= 0; i--)
    {
        let carry = 0;
        // Temporary result for each digit multiplication
        let tempResult = []; 

        // Multiply current digit of the second number with 
        //each digit of the first number
        for (let j = num1Array.length - 1; j >= 0; j--) 
        {
            let product = num1Array[j] * num2Array[i] + carry;
            // Add the least significant digit to the temporary result
            tempResult.unshift(product % 10); 
            carry = Math.floor(product / 10); // Update the carry
        }
        // If there's any remaining carry after multiplying all digits
        // of the first number
        if (carry > 0)
        {
            //to add carry at the beginniing of the array unshift is used
            tempResult.unshift(carry);
        }
		// Add appropriate number of zeros to the end of temporary result
        // based on position
        for (let k = num2Array.length - 1; k > i; k--) 
        {
            tempResult.push(0);
        }
		
        // Add the temporary result to the final result
        result = Addition(result, tempResult);
    }
    return result;
}

const firstA = [3, 6];
const secondA = [10, 0];

/**
 * try block to smoothefully run the code if any error is 
 * encountered catch block will deal with it without stopping the code 
 */
try
{
    const resultArray = Multiplication(firstA, secondA);
    console.log("Multiplication answer is ", resultArray);

}
 catch (error)
{
    console.error(error.message);
}
