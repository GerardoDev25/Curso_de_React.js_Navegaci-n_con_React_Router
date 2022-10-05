import React from 'react';
import { Link } from 'react-router-dom';
import { blogdata } from './blogdata';

export const BlogPage = () => {
  return (
    <>
      <h1>BlogPage</h1>
      <ul>
        {blogdata.map((post, index) => (
          <BlogLink {...post} key={'blogdata-' + index} />
        ))}
      </ul>
    </>
  );
};

const BlogLink = ({ title, slug, content, author }) => {
  return (
    <li>
      <Link to={`/blog/${slug}`}>{title}</Link>
    </li>
  );
};
