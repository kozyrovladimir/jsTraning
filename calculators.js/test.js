const digits = {Z:2000, M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

function arabic2roman(num){
    if (!/^\-?\d+$/.test(num+'')) throw new Error('Can`t convert that arabic numeric to roman: ' + num)
    if (num < 1) return '';
    let result = '';
    for (let key in digits)
      while ( num >= digits[key] ) {
        result += key;
        num -= digits[key];
      }
    return result;
  };

  console.log (arabic2roman(86));