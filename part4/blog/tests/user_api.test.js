const assert = require('assert');

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const supertest = require('supertest');

const { test, describe, beforeEach, after } = require('node:test');
const User = require('../models/user');
const app = require('../app');
const helper = require('./test_helper');

const api = supertest(app);

describe('when there is initially one user in db', () => {
  beforeEach(async () => {
    await User.deleteMany({});

    const passwordHash = await bcrypt.hash('sekret', 10);
    const user = new User({ username: 'root', passwordHash });

    await user.save();
  });

  test('creation of a user succeeds', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    };

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    assert.strictEqual(usersAtEnd.length, usersAtStart.length + 1);

    const usernames = usersAtEnd.map((u) => u.username);
    assert(usernames.includes(newUser.username));
  });

  test('creation of a user fails due to password length < 3', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'sa',
    };

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)
      .expect((response) => {
        assert(
          response.body.error,
          'password needs to be at least 3 characters long!'
        );
      });

    const usersAtEnd = await helper.usersInDb();
    assert(usersAtStart, usersAtEnd);
  });
  test('creation of a user fails due to username length < 3', async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: 'ml',
      name: 'Matti Luukkainen',
      password: 'salainen',
    };

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)
      .expect((response) => {
        assert(
          response.body.error,
          'username needs to be at least 3 characters long!'
        );
      });
  });

  test('return user object with blogs property', async () => {
    const newUser = {
      username: 'mleasd',
      name: 'Matti Luukkainen',
      password: 'salainen',
    };

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/);

  });
});

after(async () => {
  await User.deleteMany({});
  await mongoose.connection.close();
});
