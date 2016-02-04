var dynamo = require('./dynamo');

module.exports.respond = function (event, callback) {
  var params = {
    TableName: dynamo.tableName,
    Key: {
      id: event.id
    },
    UpdateExpression: 'SET body = :body, updatedAt = :updatedAt',
    ExpressionAttributeValues: {
      ':body': event.note.body,
      ':updatedAt': new Date().getTime()
    }
  };

  return dynamo.db.updateItem(params, function (error, data) {
    if (error) {
      callback(error);
    } else {
      var newData = { 'note' : event.note };
      callback(error, newData);
    }
  });
};
