var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('Controllers: message.get()');
      models.messages.get()
        .then( (messages) => {
          let returnObject = { 'results': messages };
          res.send(JSON.stringify(returnObject));
        });
    },
    // a function which handles posting a message to the database 
    post: function (req, res) {
      models.messages.post(req, res)
        .then( (successMessage) => res.end(successMessage) );
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};