// 방법의 수 = 경우의 수 구하기 => 주어진 숫자 개수 적음, 조건 적음 => dfs
function solution(numbers, target) {
    var answer = 0;
    const N = numbers.length;
    
    function dfs(idx, sum, count) {
        if(count === N) {
            if(sum === target) {
                answer += 1;
                return;
            } 
            return false;
        }
        
        const cur = numbers[idx];
        dfs(idx + 1, sum + cur, count + 1)
        dfs(idx + 1, sum - cur, count + 1)
    }
    
    dfs(0, 0, 0)
    
    return answer;
}