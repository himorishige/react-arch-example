export type Post = {
  id: number;
  title: string;
  body: string;
};

export type GetPostParams = {
  _limit?: number;
};

export type CreatePostDto = {
  title: string;
  body: string;
  userId: number;
};
