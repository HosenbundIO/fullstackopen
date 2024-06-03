const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes;
  };
  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  const reducer = (max, blog) => {
    return max.likes > blog.likes ? max : blog;
  };
  return blogs.reduce(reducer, blogs[0]);
};

const mostBlogs = (blogs) => {
  let authorWithMostBlogs = '';
  let maxBlogs = 0;
  const authorCounts = blogs.reduce((counts, blog) => {
    const author = blog.author;
    if (counts[author]) {
      counts[author]++;
    } else {
      counts[author] = 1;
    }
    if (counts[author] > maxBlogs) {
      maxBlogs = counts[author];
      authorWithMostBlogs = author;
    }
    return counts;
  }, {});

  return {
    author: authorWithMostBlogs,
    blogs: maxBlogs,
  };
};

const mostLikes = (blogs) => {
  const authorLikes = blogs.reduce((likes, blog) => {
    if (likes[blog.author]) {
      likes[blog.author] += blog.likes;
    } else {
      likes[blog.author] = blog.likes;
    }
    return likes;
  }, {});

  const authorWithMostLikes = Object.entries(authorLikes).reduce(
    (max, author) => {
      if (max[1] > author[1]) {
        return max;
      } else {
        return author;
      }
    }
  );
  return { author: authorWithMostLikes[0], likes: authorWithMostLikes[1] };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
