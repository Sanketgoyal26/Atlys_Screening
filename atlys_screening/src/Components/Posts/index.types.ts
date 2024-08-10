interface Post {
  pic: string;
  name: string;
  reaction: string;
  postedAgo: string;
  isEdited: boolean;
  post: string;
  comments: string;
};

export interface PostCardProps {
  post: Post;
};
