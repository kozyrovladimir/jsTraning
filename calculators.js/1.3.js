function areaTriangleFunc (a,b,c){
    let p = a + b + c;
    p = p/2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c) );
};

console.log(areaTriangleFunc(10, 10, 5));