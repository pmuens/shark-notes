var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();

module.exports.db = dynamo;
module.exports.tableName = process.env.SERVERLESS_PROJECT_NAME + '-notes-' + process.env.SERVERLESS_STAGE;
