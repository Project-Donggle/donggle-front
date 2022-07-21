export interface IPost {
  createAt: Date;
  updateAt: Date;
  location: string[];
  emotion: string;
  title: string;
  contents: string;
  like: number;
  likeUser: User[];
  user: User;
  category: string;
  view: number;
  comments: Comment[];
  owner: User;
  report: User[];
  reportCount: number;
}

interface User {
  name: string;
}

export interface Comment {
  user: User;
  contents: string;
}
