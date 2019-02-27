function getZerosCount(number, base) {
  let count = 0;
  let prime = [];
  let numbers = new Array(257).fill(1);
  function getPrimeDividers(value) {
    let mul = [];
    if (numbers[value]) {
      mul.push({prime: value,val: 1});
      // mul[value, val];
    } else {
      let i = 0;
      let val = 0;
      do {
        if (value % prime[i] == 0) {
          val++;
          value /= prime[i];
        } else {
          if (val != 0) {
            mul.push({prime: prime[i],val: val});
            // mul[prime[i]] = val;
          }
          i++;
          val = 0;
        }
      } while (value != 1);
      mul.push({prime: prime[i],val: val});
      // mul[prime[i]] = val;
    }
    return mul;
  }
  function getPrimeDividerss(num) {
    let mul = [];
    if (numbers[num]) {
      mul.push({prime: num,val: 1});
      // mul[value, val];
    } else {
      let i = 0;
      let val = 0;
      do {
        if (num % mult[i].prime == 0) {
          val++;
          num /= mult[i].prime;
        } else {
          if (val != 0) {
            mul.push({prime: mult[i].prime,val: val});
            // mul[prime[i]] = val;
          }
          i++;
          val = 0;
        }
      } while (num >= 1 && i < mult.length);
      // mul.push({prime: mult[i - 1].prime,val: val});
      // mul[prime[i]] = val;
    }
    return mul;
  }
  function mergeObj(obj1, obj2) {
    let obj = obj1.slice();
    for (let i = 0; i < obj.length; i++) {
      for (let j= 0; j < obj2.length; j++) {
        if (obj[i].prime == obj2[j].prime) {
          obj[i].val += obj2[j].val; 
        }
      } 
    }
    return obj;
  }
  let p = 2;
  do {
    for (let i = 2; i * p < 257; i++) {
      numbers[i * p] = 0;
    }
    do {
      p++;
    } while (numbers[p] == 0 && p < 257);
  } while (p < 257);
  for (let i = 2; i < 257; i++) {
    if (numbers[i]) {
      prime.push(i);
    } 
  }
  let mult = getPrimeDividers(base);
  let mul2 = [];
  for (let i = 0; i < mult.length; i++) {
    mul2[i] = Object.assign({}, mult[i]);
  }
  for (let i = 0; i < mul2.length; i++) {
    mul2[i].val = 0;
  }
  for (let i = 2; i <= number; i++) {
    mul2 = mergeObj(mul2, getPrimeDividerss(i));
  }
  let min = Number.MAX_VALUE;
  let key;
  for (let i = 0; i < mul2.length; i++) {
    if (mul2[i].val < min) {
      min = mul2[i].val;
      key = mul2[i].prime;
    }
  }
  for (let i = 0; i < mult.length; i++) {
    if (mult[i].prime == key) {
      count = (min - min % mult[i].val) / mult[i].val;
    }
  }

  return count;
}

console.log(getZerosCount(82557730, 84)); 