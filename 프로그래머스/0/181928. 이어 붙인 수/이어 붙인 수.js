function solution(num_list) {
    let 홀수 = ''
    let 짝수 = ''
    num_list.forEach(i=>{
        if(i%2===0) {
            짝수 += i + ''
        } else {
            홀수 += i + ''
        }
    })
    return Number(홀수) + Number(짝수)
}