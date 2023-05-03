const twoSum = () => {
  const len = nums.length;
  const result = [];

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] == target) {
        result.push(i, j);
      }
    }
  }

  return result;
};
