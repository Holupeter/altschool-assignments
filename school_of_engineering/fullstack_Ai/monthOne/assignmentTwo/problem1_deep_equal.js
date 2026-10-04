function deepEqual(objA, objB) {
  // 1. identical values are equal
  if (objA === objB) {
    return true;
  }

  // 2. Check if either value is null or not an object
  if (
    objA === null || typeof objA !== "object" || objB === null ||  typeof objB !== "object"
  ) {
    return false;
  }

  // 3. Extract the keys of both objects
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 4. If they have different numbers of keys, they are not equal
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 5. Compare each key and value recursively
  for (const key of keysA) {
    // Check if the key exists in objB
    if (!objB.hasOwnProperty(key)) {
      return false;
    }

    // Recursively compare the values for this key
    if (!deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  // 6. If all checks pass, the objects are deeply equal
  return true;
}


console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false