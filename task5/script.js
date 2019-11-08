function check(data, expectedType) {
  if (expectedType === 'array' && typeof data) {
    return false;
  }
}

console.log(check(null, 'null'));