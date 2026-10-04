// object initialization
function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {}
  }; 

  // Check for removed keys and changed values
  for (const key in oldObj) {
    if (!newObj.hasOwnProperty(key)) {
      // Key exists in oldObj but not in newObj
      result.removed[key] = oldObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      // Key exists in both, but values are different
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  // 2. Check for newly added keys
  for (const key in newObj) {
    if (!oldObj.hasOwnProperty(key)) {
      // Key exists in newObj but not in oldObj
      result.added[key] = newObj[key];
    }
  }

  return result;
}


console.log(
  diffObjects(
    { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
    { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
  )
);