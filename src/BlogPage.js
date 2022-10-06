import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { blogdata } from './blogdata';

export const BlogPage = () => {
  return (
    <>
      <h1>BlogPage</h1>
      <ul>
        {blogdata.map((post) => (
          <BlogLink {...post} key={post.slug} />
        ))}
      </ul>
      <Outlet />
    </>
  );
};

const BlogLink = ({ title, slug }) => {
  return (
    <li>
      <Link to={`/blog/${slug}`}>{title}</Link>
    </li>
  );
};
