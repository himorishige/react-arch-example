import { api } from 'src/lib/api';

import type { Post, GetPostParams, CreatePostDto } from 'src/types';

interface PostsRepository {
  getPosts: (params?: GetPostParams) => Promise<Post[]>;
  createPost: (params?: CreatePostDto) => Promise<void>;
}

export const postsRepository: PostsRepository = {
  getPosts: async (params?: GetPostParams): Promise<Post[]> => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await api.get<Post[]>('posts', { params });
    return response.data;
  },

  createPost: async (params?: CreatePostDto): Promise<void> => {
    await api.post<Post[]>('posts', { params });
  },
};
