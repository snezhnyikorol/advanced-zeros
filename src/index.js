module.exports = function getZerosCount(number, base) {
  function div(a, b) {
    return (a - a % b) / b;
  }
  let muls = {};
  function getMuls(n, muls) {
    let p = 2;
    let length = Math.sqrt(n);
    while (p <= length) {
      while(n % p == 0) {
        n /= p;
        length = Math.sqrt(n);
        if (!muls.hasOwnProperty(p)) {
          muls[p] = 0;
        }
        muls[p]++;
      }
      p++;
    }
    if (n != 1) {
      if (!muls.hasOwnProperty(n)) {
        muls[n] = 0;
      }
      muls[n]++;
    }
  }
  getMuls(base, muls);
  let res = Number.MAX_SAFE_INTEGER;
  for (const key in muls) {
    let p_res = 0;
    let mul = key;
    while (div(number, mul)) {
      p_res += div(number, mul);
      mul *= key;
    }
    p_res = div(p_res, muls[key]);
    res = Math.min(p_res, res);
  }
  return res;
}