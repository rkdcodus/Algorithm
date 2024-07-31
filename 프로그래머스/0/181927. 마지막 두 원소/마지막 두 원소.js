function solution(num_list) {
    const answer = [... num_list]
    const last = num_list.at(-1)
    const previous = num_list.at(-2)
    
    if(last > previous) answer.push(last-previous)
    else answer.push(last * 2)
    
    return answer
}