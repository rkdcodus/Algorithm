// 자르기 slice k, 정렬 sort -> nlogn
function solution(array, commands) {
    var answer = [];
    
    for(const x of commands) {
        const [i, j, k] = x;
        const slicedArr = array.slice(i-1, j);
        slicedArr.sort((a,b) => a - b);
        
        answer.push(slicedArr[k-1]);
    }
    
    return answer;
}