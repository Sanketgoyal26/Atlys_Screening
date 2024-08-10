import React from 'react';
import { PostCardProps } from './index.types';
import ChatBubble from '../images/ChatBubble.png';

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-customGray p-4 rounded-lg mb-4 border-2 border-inputBorderColor">
      <div className="flex items-start space-x-4">
        <img
          src={post.pic}
          alt={`${post.name}'s profile`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-base font-medium text-labelText">{post.name}</p>
          <div className="flex items-center space-x-2">
            <p className="text-registerText text-sm font-medium">{post.postedAgo}</p>
          {post.isEdited && <p className="text-sm text-registerText">• Edited</p>}
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 text-registerText font-normal text-base rounded bg-customGraySecond">
        <div className='flex gap-x-3'>
          <div className='bg-customGray rounded-full px-4 h-[48px] w-[48px] flex items-center justify-center'>{post.reaction}</div>
          <p>{post.post}</p>
        </div>
      </div>
      <div className="mt-2 text-registerText text-sm font-medium flex gap-x-2">
        <img src={ChatBubble} className='h-5 w-5'/>
        <p>{post.comments}</p>
      </div>
    </div>
  );
};

export default PostCard;
