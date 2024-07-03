function solution(num_list) {
    const mul = num_list.reduce((acc, cur) => {
        return acc * cur;
    }, 1);
    
    const sum = num_list.reduce((acc, cur) => {
        return acc + cur
    }, 0)
    
    return mul < sum * sum ? 1 : 0
}
