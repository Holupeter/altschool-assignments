# AltSchool Africa - Month One, Assignment 2: JavaScript Problem Solving

**Student Details:**
- **AltSchool ID:** ALT/SOE/KAR/026/1417
- **Track:** School of Engineering (AI-Powered Fullstack Engineering)
- **Environment:** Node.js v24.21.0 & Visual Studio Code
- **Problem Set:** [View Original Exercises](https://javascript.oluwasetemi.dev/294)

---

## 📌 Overview

This repository folder contains my solutions to the 5 JavaScript exercises, testing core fundamentals such as recursion, object iteration, immutability, closures, and schema validation.

---

## 📂 Solved Problems


1. **Problem 1: Deep Equal (`problem1_deep_equal.js`)**
   - Implemented a custom `deepEqual(objA, objB)` function that compares two values or objects recursively without relying on `JSON.stringify`. [Problem 1: Deep Equal](./problem1_deep_equal.js)

2. **Problem 2: Object Diff (`problem2_object_diff.js`)**
   - Implemented `diffObjects(oldObj, newObj)` to compare top-level keys between two objects and return categorized changes under `added`, `removed`, and `changed`. [Problem 2: Object Diff](./problem2_object_diff.js)

3. **Problem 3: Deep Freeze (`problem3_deep_freeze.js`)**
   - Built a recursive `deepFreeze(obj)` function extending `Object.freeze()` so that nested objects are also completely immutable. [Problem 3: Deep Freeze](./problem3_deep_freeze.js)


4. **Problem 4: Private Counter Factory (`problem4_private_counter.js`)**
   - Created `createCounter()` demonstrating JavaScript closures to maintain a private `count` state, exposed via `increment()`, `decrement()`, and a `value` getter. [Problem 4: Private Counter Factory](./problem4_private_counter.js)

5. **Problem 5: Schema Validator (`problem5_schema_validator.js`)**
   - Built `validateSchema(obj, schema)` to validate an object's properties against a type blueprint, returning an array of readable error messages or an empty array if valid. [Problem 5: Schema Validator](./problem5_schema_validator.js)

---

## 🚀 How to Run Locally

Make sure you have Node.js installed. Open your terminal inside this folder and run any of the files:

```bash
node problem1_deep_equal.js
node problem2_object_diff.js
node problem3_deep_freeze.js
node problem4_private_counter.js
node problem5_schema_validator.js