function solution(clothes) {
    const map = new Map();
    const types = [];
    let result = 1;
    
    clothes.forEach((clothe) => {
        const [name, type] = clothe
        map.set(type, (map.get(type)|| 0) + 1)
        if(!types.includes(type)) {
            types.push(type)
        }
    })
    
    
    types.forEach((type) => {
       result *= map.get(type) + 1
    })
    
    return result - 1;
}