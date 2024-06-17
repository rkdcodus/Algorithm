function solution(survey, choices) {
    const testIndex = [['R','T'], ['C','F'], ['J','M'],['A', 'N']]
    const score = new Map([['R',0], ['C',0], ['J',0],['A', 0],['T', 0], ['F',0], ['M', 0],['N', 0]])
    
    for(let i=0;i<survey.length;i++){
        const [A, B] = survey[i].split('')
        const newScore = Math.abs(choices[i] - 4)
        
        if(choices[i] < 4) score.set(A, score.get(A) + newScore)
        else if(choices[i] > 4) score.set(B, score.get(B) + newScore)    
    }
    
    const answer = testIndex.map(i => {
        const A_score = score.get(i[0])
        const B_score = score.get(i[1])
        
        if(A_score === B_score) return i[0];
        else return A_score > B_score ? i[0] : i[1];
    })
    
    return answer.join('');
}