const { test, after, beforeEach } = require('node:test');
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const assert = require('assert');
const Blog = require('../models/blog');
const helper = require('./test_helper');
const { truncate } = require('fs');

const api = supertest(app);

beforeEach(async () => {
  await Blog.deleteMany({});
  console.log('\n--------------Database cleared!--------------\n');

  const blogObjects = helper.initialBlogs.map((blog) => new Blog(blog));
  const promiseArray = blogObjects.map((blog) => blog.save());
  await Promise.all(promiseArray);
});

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('There are as many blogs as the initialBlogs Object', async () => {
  const response = await api.get('/api/blogs');

  assert.strictEqual(response.body.length, 3);
});

test('Verify the unique identifier property is named id', async () => {
  const response = await api.get('/api/blogs');

//   console.log(
//     `\n--------------${JSON.stringify(!!response.body[0].id)}--------------\n`
//   );
  assert.strictEqual(response.body[0].hasOwnProperty('id'), true);
});

after(async () => {
  await mongoose.connection.close();
});
