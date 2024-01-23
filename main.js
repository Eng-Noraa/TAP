function GetSum(nums, target) {
    const numIndex = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndex[complement]!== undefined) {
            return [numIndex[complement], i];
        }

        numIndex[nums[i]] = i;
    }

  
    return [];
}
const nums = [2, 7, 11, 15];
const target = 26;
const result = GetSum(nums, target);
console.log(result); 