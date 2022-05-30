(async () => {
  
  const database = require('./db');
  const produto = require('./produto');
  await database.sync();

})();