global.__jaydataModuleRoot = __dirname;
module.exports = require('./lib/Types/StorageProviders/InMemory/index.js');
delete global.__jaydataModuleRoot;