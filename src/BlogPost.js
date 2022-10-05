import React from 'react';
import { useParams } from 'react-router-dom';
import { blogdata } from './blogdata';

export const BlogPost = () => {
  const { slug: slugParam } = useParams();

  const post = blogdata.find((post) => post.slug === slugParam);

  const { title, content, author } = post;

  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{author}</p>
    </>
  );
};
