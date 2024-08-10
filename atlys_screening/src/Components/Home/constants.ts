import TheresaPic from '../images/Theresa.png';
import MarvinPic from '../images/Marvin.png';

export const GREETING_MESSAGE = 'How are you doing today? Would you like to share something with the community 🤗';

export const POSTS = [
  {
    pic: TheresaPic,
    name: 'Theresa Webb',
    reaction: '👋',
    postedAgo: '5mins ago',
    isEdited: false,
    post: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    comments: '24 comments'
  },
  {
    pic: MarvinPic,
    name: 'Marvin McKinney',
    reaction: '😞',
    postedAgo: '8mins ago',
    isEdited: true,
    post: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    comments: '48 comments'
  }
];
