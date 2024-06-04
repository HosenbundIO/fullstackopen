const Blog = require('../models/blog');

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

module.exports = {
  initialBlogs,
  blogsInDb,
};
