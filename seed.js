var db = require('./app/models');

var userList = [
  {
    firstName: 'Test',
    lastName: 'UserOne',
    email: 'testuserone@example.com',
    username: 'testuserone',
    password: 'passwordone',
    description: 'I am Test User One',
    userPhoto: 'http://i.imgur.com/vZpEGd7.jpg'
  },
  {
    firstName: 'Test',
    lastName: 'UserTwo',
    email: 'testusertwo@example.com',
    username: 'testusertwo',
    password: 'passwordtwo',
    description: 'I am Test User Two',
    userPhoto: 'http://i.imgur.com/vZpEGd7.jpg'
  },
  {
    firstName: 'Test',
    lastName: 'UserThree',
    email: 'testuserthree@example.com',
    username: 'testuserthree',
    password: 'passwordthree',
    description: 'I am Test User Three',
    userPhoto: 'http://i.imgur.com/vZpEGd7.jpg'
  }
];

var exerciseList = [
  {
    title: 'Example exercise one',
    description: 'This is the first example exercise',
    photos: ['http://i.imgur.com/vZpEGd7.jpg', 'http://i.imgur.com/vZpEGd7.jpg']
  },
  {
    title: 'Example exercise two',
    description: 'This is the second example exercise',
    photos: ['http://i.imgur.com/vZpEGd7.jpg']
  },
  {
    title: 'Example exercise three',
    description: 'This is the third example exercise',
    photos: ['http://i.imgur.com/vZpEGd7.jpg', 'http://i.imgur.com/vZpEGd7.jpg', 'http://i.imgur.com/vZpEGd7.jpg']
  }
];

db.User.remove({}, function(error, users) {
  db.User.create(userList, function (error, users) {
    if (error) {
      return console.log('error', error);
    }
    console.log('created', users.length, 'users');
    process.exit();
  });
});

db.Exercise.remove({}, function(error, exercises) {
  db.Exercise.create(exerciseList, function (error, exercises) {
    if (error) {
      return console.log('error', error);
    }
    console.log('created', exercises.length, 'exercises');
    process.exit();
  });
});
