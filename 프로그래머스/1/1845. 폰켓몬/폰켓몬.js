function solution(nums) {
    const max = nums.length / 2;
    const set = new Set(nums)
    
    return max < set.size ? max : set.size
//     const map = new Map();
    
//     nums.forEach(num => {
//         map.set(num, (map.get(num) || 0) + 1);
//     })
    
//     if(nums.length / 2 < map.size) {
//         return nums.length / 2
//     }
    
//     return map.size;
}