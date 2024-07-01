function decryption(arr, n) {
    const newArr = arr.map(str => {
        const binary = []
        let num = Number(str)
        let count = n
        while(num>0) {  
            binary.push(num % 2) 
            num = parseInt(num/2)
            count -= 1
        }
        
        for(let i=0;i<count;i++){
            binary.push(0)
        }
        
        return binary.reverse()
    })
    return newArr
}

function solution(n, arr1, arr2) {
    let newMap = Array.from({length: n}, ()=> Array.from({length: n}, ()=> ' '))
    const map1 = decryption(arr1, n) 
    const map2 = decryption(arr2, n)
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(map1[i][j] === 1 || map2[i][j] === 1) newMap[i][j] = '#'
        }
    }
    
    newMap = newMap.map(row => {
        return row.join('')
    })
    
   return newMap
   
}