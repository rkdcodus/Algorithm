function solution(nums) {
    const map = new Map();
    
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1);
    })
    
    if(nums.length / 2 < map.size) {
        return nums.length / 2
    }
    
    return map.size;
}