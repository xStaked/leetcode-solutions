const twoSumTs = (nums: number[], target: number): number[] => {
  const len: number = nums.length;
  const result: number[] = [];

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] == target) {
        result.push(i, j);
      }
    }
  }

  return result;
};
