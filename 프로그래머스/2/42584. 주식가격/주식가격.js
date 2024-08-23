function solution(prices) {
    const stack = [];
    const result = new Array(prices.length).fill(0)
  
    for(let i = 0; i< prices.length ; i++) {
        // stack이 비었다면 추가해주고 바로 넘어가기
        if(!stack.length) {
            stack.push(i)
            continue
        }
        // stack에 들어있는 값 초 세어주기
        stack.forEach(i => {
            result[i] += 1
        })
        // stack 추가되는 값보다 큰 값들 전부 제거
        while (prices[stack.at(-1)] > prices[i]) {
            stack.pop()
        }
        // stack에 새로운 값 추가
        stack.push(i)
    } 

    return result;
}