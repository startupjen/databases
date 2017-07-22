var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function () {
      db.query('select * from messages', function(error, results, fields) {
        if (error) { console.log('got error ', error); }
        console.log('I AM SUCCESSFUL');
        //console.log('results are', results);
        //console.log('type of ', typeof results);
      });
    },   
    // a function which can be used to insert a message into the database
    post: function () {
      console.log('sup im in models post now');
      let aPost = {
        user: 'wheeeee',
        message: 'this is an awesome message',
        room: 'some lobby'
      };
      db.query('INSERT INTO posts ?', aPost, function(error, results, fields) {
        console.log('i got into the insert query!!!');
        console.log('i got an error', error);
          
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

