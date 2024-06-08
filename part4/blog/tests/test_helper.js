const Blog = require('../models/blog');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const initialBlogs = [
  {
    title: 'String0',
    author: 'String0',
    url: 'String0',
    likes: 0,
  },
  {
    title: 'String1',
    author: 'String1',
    url: 'String1',
    likes: 1,
  },
  {
    title: 'String2',
    author: 'String2',
    url: 'String2',
    likes: 2,
  },
];

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

const nonExistingId = async () => {
  const blog = new Blog({
    title: 'String2',
    author: 'String2',
    url: 'String2',
    likes: 2,
  });
  await blog.save();
  await blog.deleteOne();

  return blog._id.toString();
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};

const createUserAndToken = async () => {
  const passwordHash = await bcrypt.hash('sekret', 10);
  const user = new User({ username: 'root', passwordHash });

  await user.save();
  const token = jwt.sign({ id: user.id }, process.env.SECRET);

  return token;
};

module.exports = {
  initialBlogs,
  blogsInDb,
  nonExistingId,
  usersInDb,
  createUserAndToken,
};
