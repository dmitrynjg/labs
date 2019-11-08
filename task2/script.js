
let array1 = [1, 2, '55'];
let array2 = [1, 2, 3];

function isArrayEqual(a1, a2) {

  if (a1.length !== a2.length) {
    return false;
  }
  else {
    for (let i = 0; i = a1.length - 1; i++) {
      if (a1[i] === a2[i]) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

