let num = [1,2,3,4,5,6];
function sumTwo(a) {
  console.log(2*a);
  sumTwo(a);
};

sumTwo(...num);