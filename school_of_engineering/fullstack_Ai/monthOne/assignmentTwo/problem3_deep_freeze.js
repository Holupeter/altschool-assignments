function deepFreeze(obj) {
  //prevent null or non-object values
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  //Freeze the current object
  Object.freeze(obj);

  //Iterate through every key to freeze nested objects
  for (const key of Object.keys(obj)) {
    const prop = obj[key];

    // Check if the property is an object that isn't already frozen
    if (prop !== null && typeof prop === "object" && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  }

  //Return the frozen object
  return obj;
}


const config = deepFreeze({
  api: { baseUrl: 'https://x.com', retries: 3 },
  debug: false
});

config.api.baseUrl = 'https://changed.com'; // ignored
config.debug = true;                       // ignored

console.log(config.api.baseUrl, config.debug); // "https://x.com" false
console.log(Object.isFrozen(config.api));      // true