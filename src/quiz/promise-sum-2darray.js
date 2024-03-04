
async function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  async function sum2DArray(array2D) {
    try {
      const sums = await Promise.all(array2D.map(arr => sumArray(arr)));
      const totalSum = sums.reduce((total, current) => total + current, 0);
      console.log(`Total sum: ${totalSum}`);
      return totalSum;
    } catch (error) {
      console.error(`Error calculating sum: ${error}`);
    }
  }
  
  const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  sum2DArray(array2D);
  