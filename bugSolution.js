```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.aggregate([
  {
    $match: { age: { $ne: null } }
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: { $toDouble: "$age" } }
    }
  }
]);
```