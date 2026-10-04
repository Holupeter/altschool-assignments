function validateSchema(obj, schema) {
  //Create an empty array to collect error messages
  const errors = [];

  //Loop through every expected key defined in the schema
  for (const key in schema) {
    const expectedType = schema[key];

    // Check if the property is missing from obj
    if (!obj.hasOwnProperty(key)) {
      errors.push(`${key}: missing property`);
    } else {
      // If it exists, check whether the type matches
      const actualType = typeof obj[key];

      if (actualType !== expectedType) {
        errors.push(`${key}: expected ${expectedType}, got ${actualType}`);
      }
    }
  }

  //Return the errors array (empty if valid)
  return errors;
}


const schema = { name: 'string', age: 'number', isAdmin: 'boolean' };

console.log(
  validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema)
); // []

console.log(
  validateSchema({ name: 'Ada', age: '21' }, schema)
); // ['age: expected number, got string', 'isAdmin: missing property']