import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './auth';
import { blogdata } from './blogdata';

export const BlogPost = () => {
  const { slug: slugParam } = useParams();
  const navigate = useNavigate();
  const auth = useAuth();
  
  const post = blogdata.find((post) => post.slug === slugParam);
  const { title, content, author } = post;

  const canDelete = auth.user?.isAdmin || author === auth.user?.username;


  const handleReturn = () => {
    // navigate('/blog', { replace: true });
    navigate(-1);
  };

  return (
    <>
      <h2>{title}</h2>
      <button onClick={handleReturn}>go back</button>
      <p>{content}</p>
      <p>{author}</p>

      {canDelete && <button>Eliminar post</button>}
    </>
  );
};
