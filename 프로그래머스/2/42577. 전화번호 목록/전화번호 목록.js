// 배열의 요소의 접두어가 다른 번호와 겹치는지 체크, 중복된 전화번호는 없음. -> 해시? 왜 해시?
// 시간 복잡도 -> O(N) 필요
// phone_book을 순회하면서 
// 요소를 잘라가면서 map에 존재하면 true, 없으면 false
function solution(phone_book) {
    var answer = true;
    const set = new Set(phone_book);
    
     for(const x of phone_book) {
        let prefix = '';
         
        for(let i=0; i<x.length - 1; i++){
            prefix += x[i];
            
            if(set.has(prefix)) {
                answer = false;
                break;
            } 
        } 
     }   
    
    return answer;
}