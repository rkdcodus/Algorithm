function solution(clothes) {
    const map = new Map();
    let result = 1;
    
    clothes.forEach(([_, type]) => {
        map.set(type, (map.get(type)|| 0) + 1)
    })
 
    for(const count of map.values()) {
        result *= (count + 1)
    }
    
    return result - 1;
}