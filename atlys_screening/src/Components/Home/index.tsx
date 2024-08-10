import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostCard from '../Posts';
import CreatePost from '../CreatePost';
import { POSTS, GREETING_MESSAGE } from './constants';

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const loggedInEmail = localStorage.getItem('loggedInUserEmail');

    if (!loggedInEmail) {
      navigate('/');
      return;
    }

    const loggedInUser = existingUsers.find((user: any) => user.email === loggedInEmail);

    if (!loggedInUser) {
      navigate('/');
    } else {
      setUsername(loggedInUser.username);
    }
  }, [navigate]);
  
  return (
    <div className="max-w-7xl min-w-[20rem] mx-auto px-4 sm:px-6 lg:px-56 xl:px-64 2xl:px-64 py-6">
      <div className='mb-6'>
        <p className='font-medium text-[28px] text-labelText'>Hello {username}</p>
        <p className='font-normal text-base text-registerText'>{GREETING_MESSAGE}</p>
      </div>
      <CreatePost />
      {POSTS.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  );
};

export default Home;
