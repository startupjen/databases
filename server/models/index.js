var db = require('../db');
let Promise = require('bluebird');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function () {
      return new Promise( (resolve, reject) => {
        db.query('select * from messages', function(error, messages, fields) {
          if (error) { 
            console.log('got error ', error); 
            rejet(error);
          } else {
            console.log('Models: messages.get() query');
            resolve(messages);
          }
        });
      });
    },   
    // a function which can be used to insert a message into the database
    post: function (req, res) {
      return new Promise( (resolve, reject) => {
        let insert = `INSERT INTO messages(username, text, roomname) VALUES ('${req.body.username}','${req.body.text}','${req.body.roomname}');`;
        db.query(insert, function(error, results, fields) {
          if (error) {
            console.log('i got an error', error);
            reject(error);
          } else { 
            console.log('successful post');
            resolve('Message posting successful');
          }
        });
      }); 
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

