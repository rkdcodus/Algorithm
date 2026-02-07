// 긴쪽은 무조건 가로로 둔다! 
// 이후에 가로 최대, 세로 최대가 정답. 
function solution(sizes) {
    var answer = 0;
    const sortedSizes = [];
    
    for(const [w, h] of sizes) {
        if( w >= h ) sortedSizes.push([w, h])
        else sortedSizes.push([h, w])        
    }
    
    let maxW = 0;
    let maxH = 0;
    
    for(const [w, h] of sortedSizes) {
        if(maxW < w) maxW = w;
        if(maxH < h) maxH = h;
    }
    
    
    return maxW * maxH;
}