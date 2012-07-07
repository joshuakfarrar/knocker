var knocker = require('../index')
  .setTarget('10.0.0.2')
  .knock(6000)
  .knock(7000)
  .knock(8000);
