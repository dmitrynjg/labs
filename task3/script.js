let array1 = [1, [2, 3, 4], 5];

function flatArray(a1) {
  let arrayanswer = [];
  function isNumber(num) {
    if (typeof num == 'number') {
      arrayanswer.push(num);
    }
  }
  if (typeof a1 == 'object') {
    for (let i = 0; i < a1.length; i++) {
      if (isNaN(a1[i]) === false) {
        isNumber(a1[i]);
      }

      if (typeof a1[i] == 'object' && a1[i] !== null) {
        let numArray = i;
        for (let i = 0; i < a1[numArray].length; i++) {
          isNumber(a1[numArray][i]);
        }
      }
    }
  }
  return arrayanswer;

}
console.log(flatArray(array1));
