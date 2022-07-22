import { IPost } from "@post/types/post.type";
import { Comment } from "@post/types/post.type";

const MOCK_POST = {
  createAt: new Date(),
  updateAt: new Date(),
  like: 10,
  user: {
    name: "인생은 동글",
  },
  emotion: "기쁨",
  category: "운동",
  comments: [
    {
      user: {
        name: "안녕 나도 동글",
      },
      contents: "방가방가루",
    } as Comment,
  ],
  contents:
    "날씨도 선선해져서 러닝을 하고 있는데 혼자는 재미없어서요 페이스 조절해가면서 천천히 달려봐요~",
  title: "광안리 7시에 5km 러닝하실분 있나요?",
  likeUser: [
    {
      name: "좋아요 유저",
    },
  ],
  location: ["121.11", "131.11"],
  owner: {
    name: "인생은 동글",
  },
  view: 100,
  report: [],
  reportCount: 0,
} as IPost;

export class PostMockService {
  getPost(): Promise<IPost> {
    return new Promise((resolve) => {
      resolve(MOCK_POST);
    });
  }
}
