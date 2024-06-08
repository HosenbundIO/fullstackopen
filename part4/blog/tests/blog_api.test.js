const { test, after, beforeEach, describe } = require('node:test');
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const assert = require('assert');
const Blog = require('../models/blog');
const User = require('../models/user');
const helper = require('./test_helper');

const api = supertest(app);

describe('When there is initially some blogs saved', () => {
  let token;

  beforeEach(async () => {
    await Blog.deleteMany({});
    console.log('\n--------------Database cleared!--------------\n');
    const blogObjects = helper.initialBlogs.map((blog) => new Blog(blog));
    const promiseArray = blogObjects.map((blog) => blog.save());
    await Promise.all(promiseArray);

    await User.deleteMany({});

    token = await helper.createUserAndToken();
  });

  test('Blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('All blogs are returned', async () => {
    const response = await api.get('/api/blogs');

    assert.strictEqual(response.body.length, 3);
  });

  test('Blog has ID prop', async () => {
    const response = await api.get('/api/blogs');
    //   console.log(
    //     `\n--------------${JSON.stringify(!!response.body[0].id)}--------------\n`
    //   );
    assert.strictEqual(response.body[0].hasOwnProperty('id'), true);
  });

  describe('viewing a specific blog', () => {});

  describe('addition of new blog', () => {
    test('Verify POST request is saved correctly', async () => {
      const newBlog = {
        title: 'String3',
        author: 'String3',
        url: 'String3',
        likes: 3,
      };

      await api
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/);

      const blogsAtEnd = await helper.blogsInDb();
      assert.strictEqual(helper.initialBlogs.length + 1, blogsAtEnd.length);

      const title = blogsAtEnd.map((blog) => blog.title);
      assert(title.includes('String3'));
    });

    test('Verify likes default value on POST', async () => {
      const newBlog = {
        title: 'String3',
        author: 'String3',
        url: 'String3',
      };

      await api
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/);

      const blogsAtEnd = await helper.blogsInDb();
      console.log(
        `\n--------------${JSON.stringify(blogsAtEnd)}--------------\n`
      );

      assert.strictEqual(blogsAtEnd[blogsAtEnd.length - 1].likes, 0);
    });

    test('Verify if title or url property is missing leads to 400', async () => {
      const newBlog = {
        author: 'String3',
        url: 'String3',
        likes: 3,
      };

      const newBlog1 = {
        title: 'String4',
        author: 'String4',
        likes: 4,
      };

      await api
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send(newBlog)
        .expect(400);
      await api
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send(newBlog1)
        .expect(400);

      const blogsAtEnd = await helper.blogsInDb();
      assert.strictEqual(blogsAtEnd.length, helper.initialBlogs.length);
    });
    test('Adding of a new blog fails if no token is given', async () => {
      const newBlog = {
        title: 'String4',
        author: 'String4',
        url: 'String4',
        likes: 4,
      };

      const result = await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(401)
        .expect('Content-Type', /application\/json/);

      assert.strictEqual(result.body.error, 'token invalid');
    });
  });

  describe('deletion of a blog post', () => {
    test('deletion succeeds', async () => {
      const newBlog = {
        title: 'Blog to delete',
        author: 'Test Author',
        url: 'http://testurl.com',
        likes: 10,
      };
      const postedBlog = await api
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/);

      const blogsAtStart = await helper.blogsInDb();

      await api
        .delete(`/api/blogs/${postedBlog.body.id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(204);

      const blogsAtEnd = await helper.blogsInDb();
      assert.strictEqual(blogsAtEnd.length, blogsAtStart.length - 1);

      const titles = blogsAtEnd.map((blog) => blog.title);
      assert(!titles.includes(postedBlog.body.title));
    });
  });

  describe('update blog posts', () => {
    test('update a specific blog post', async () => {
      const blogsAtStart = await helper.blogsInDb();
      const blogToUpdate = blogsAtStart[0];
      const update = { likes: 100 };

      await api.put(`/api/blogs/${blogToUpdate.id}`).send(update).expect(200);

      const blogsAtEnd = await helper.blogsInDb();
      const updatedBlog = blogsAtEnd.find(
        (blog) => blog.id === blogToUpdate.id
      );
      assert.strictEqual(updatedBlog.likes, 100);
    });
  });
});

after(async () => {
  await mongoose.connection.close();
});
