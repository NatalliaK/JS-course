/**
 * Write a function that will return independent counters,
 * each adding 1 to the result of the call with every invocation, regardless of the number of counters:
 *
 * const counter1 = makeCounter();
 * const counter2 = makeCounter();
 * const counter3 = makeCounter();
 *
 * counter1(); // 1
 * counter1(); // 2
 * counter1(); // 3
 *
 * counter2(); // 1
 * counter2(); // 2
 *
 * counter3(); // 1
 **/

export function makeCounter() {
  // your implementation here
  let counter = 0;

  return function () {
    console.log(counter);
    counter++;
    return counter;
  };
}

/**
 * Write an implementation of the 'sumTo' function
 * that returns the sum of all values from 1 to num
 *
 * @param num
 * @returns {number}
 */
export function sumTo(num) {
  // your implementation here
  let counter = 0;
  const arr = [];

  while (counter < num) {
    counter++;
    arr.push(counter);
  }

  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

/**
 * Write an implementation of the 'sumArrElems' function
 * that returns the sum of all values in the list
 *
 * @param arr {Array} Array of numbers
 * @returns {number}
 *
 * @param arr
 **/
export function sumArrElems(arr) {
  // your implementation here
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

/**
 * Write an implementation of the 'binarySearchIndex' function that takes a sorted array and a value
 * and returns the index of the value in the array
 * without using methods that iterate over the entire array (e.g., for, forEach).
 * If the value is not found, return -1.
 *
 * @param arr
 * @param num
 * @returns {number}
 */
export function binarySearchIndex(arr, num) {
  // your implementation here

  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.ceil((start + end) / 2);
    if (arr[middle] < num) {
      // Search the right half
      start = middle + 1;
    } else if (arr[middle] > num) {
      // Search the left half
      end = middle - 1;
    } else if (arr[middle] === num) {
      // Found num
      return middle;
    }
  }
  // Target not found
  return -1;
}

console.log(binarySearchIndex([1, 2, 10, 44, 105, 166, 207, 408, 900], 10)); // 2
console.log(binarySearchIndex([100, 203, 305, 344, 500, 565, 587, 800], 344)); // 3

/**
 * Write an implementation of the 'spiralOrder' function
 * that returns all elements of the matrix in spiral order:
 * [
 * [3, 4],
 * [8, 9]
 * ] // [3, 4, 9, 8]
 *
 * [
 * [1, 2, 3],
 * [4, 5, 6],
 * [7, 8, 9]
 * ] // [1, 2, 3, 6, 9, 8, 7, 4, 5]
 *
 * [
 * [1, 2, 3, 4],
 * [5, 6, 7, 8],
 * [9, 10, 11, 12]
 * ] // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
 *
 * @param matrix
 * @returns {Array}
 */
export function spiralOrder(matrix) {
  // your implementation here

  // вариант 1 - нашёл такое решение, но сложно понять
  // let result = []

  // while (matrix.length) {
  //   result.push(
  //     ...matrix.shift(),
  //     ...matrix.map(a => a.pop()),
  //     ...(matrix.pop() || []).reverse(),
  //     ...matrix.map(a => a.shift()).reverse()
  //   );
  // }
  // return result;

  // console.log(
  //   spiralOrder([
  //     [1, 2, 3, 4, 5],
  //     [6, 7, 8, 9, 10],
  //     [11, 12, 13, 14, 15],
  //     [16, 17, 18, 19, 20],
  //   ])
  // );

  // вариант 2 - нашёл в интернете. Думаю, лучше обсудить на уроке

  let result = [];

  const readLayer = (arr) => {
    if (arr.length === 0) {
      return;
    }

    if (arr.length === 1) {
      result = result.concat(arr[0]);
      return;
    }

    // step 1.) read and remove topmost row
    for (let i = 0; i < arr[0].length; i++) {
      result.push(arr[0][i]);
    }
    arr.shift();

    // step 2.) log and remove last value from each row (downward)
    for (let i = 0; i < arr.length - 1; i++) {
      result.push(arr[i][arr[i].length - 1]);
      arr[i].pop();
      if (arr[i].length === 0) {
        arr.splice(i, 1);
        i--;
      }
    }

    // step 3.) read and remove lowest row (in reverse)
    for (let i = arr[arr.length - 1].length - 1; i >= 0; i--) {
      result.push(arr[arr.length - 1][i]);
    }
    arr.pop();

    // step 4.) log and remove first value from each row (upward)
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i][0]);
      arr[i].shift();
      if (arr[i].length === 0) {
        arr.splice(i, 1);
      }
    }

    // repeat with truncated matrix
    readLayer(arr);
  };

  readLayer(matrix);
  return result;
}
