# MongoDB Aggregation Error: Unexpected Token in $group Stage

This repository demonstrates a common error encountered when using the MongoDB aggregation framework: an unexpected token error in the `$group` stage. This typically happens when the field used in the aggregation pipeline isn't of the expected data type (e.g., a string instead of a number).

## Problem

The provided `bug.js` file contains an aggregation pipeline that attempts to calculate the average age of users grouped by city. If the `age` field in your MongoDB documents is not consistently a number (it might contain strings, null, or undefined values), the `$avg` operator will fail and throw an 'unexpected token' error.

## Solution

The `bugSolution.js` file demonstrates the solution using the `$toDouble` operator. This operator converts the input value to a double (a floating-point number). This ensures that the `$avg` operator works correctly even if some `age` values are strings or not numbers. 

## How to reproduce

1.  Ensure you have a MongoDB instance running.
2.  Create a collection called 'users' with some documents, ensuring some of the 'age' fields are numbers and some are not, for example: 
    ```javascript
    db.users.insertMany([
        { name: "Alice", age: 25, city: "New York" },
        { name: "Bob", age: "30", city: "Los Angeles" },
        { name: "Charlie", age: null, city: "Chicago" },
        { name: "David", age: 35, city: "New York" }
    ]);
    ```
3.  Run `bug.js` and observe the error.
4.  Run `bugSolution.js` and observe the successful aggregation.