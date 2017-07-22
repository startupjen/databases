var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('sup dude');
      
      //calls model to get all the messages
      //returns with all the messages 

      models.messages.get();
      res.send('bloop');



    },
    // a function which handles posting a message to the database 
    post: function (req, res) {
      console.log('heyo');
      //res.writeHead(200);
      res.send('wheeeee');

      models.messages.post();
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

