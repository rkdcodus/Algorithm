// 존재 여부 확인 => map
// 동명이인이 존재 => map 생성 시 같은 key, value를 가진 쌍 생성 불가. 
// participant에서 map 객체 생성, value 값은 이름을 가진 사람 수로 저장. 
// completion으로 map에 존재하다면 value 값을 -1 
// 마지막에 map value값이 0이 아닌 사람이 완주 못한 사람..
function solution(participant, completion) {
    var answer = '';
    const map = new Map();
    
    for(const x of participant) map.set(x, (map.get(x) || 0) + 1);
    
    for(const y of completion) map.set(y, map.get(y) - 1);
    
    for(const [key, value] of map) {
        if(value > 0) answer = key
    }
    
    return answer;
}