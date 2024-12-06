```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.aggregate([
  {
    $match: { age: { $gte: 18 } }
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$age" }
    }
  }
]);

//This will return an error if the age field is not a number.
//To avoid this error, use $toDouble to convert the age field to a number before the aggregation pipeline.
```