var dynamo = require('./dynamo');

module.exports.respond = function (event, callback) {
  var params = {
    TableName: dynamo.tableName,
    Key: {
      id: event.id
    }
  };

  return dynamo.db.deleteItem(params, callback);
};
