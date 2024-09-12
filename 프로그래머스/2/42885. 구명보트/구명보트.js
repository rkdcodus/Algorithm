function solution(people, limit) {
    
    const half = Math.floor(people.length /2)
    let front = 0;
    let back = people.length -1;
    let answer = 0;
    
    people.sort((a,b)=> a-b)

    while(front < back) {
        const sum = people[front] + people[back];
        
        if(sum > limit) {
            answer += 1;
            back -= 1;
        } else {
            answer += 1;
            back -= 1;
            front += 1;
        }
    }
    
    if(front === back) answer += 1;
    
    
    return answer;
}