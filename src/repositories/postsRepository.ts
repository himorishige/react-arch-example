import { api } from 'src/lib/api';

import type { Post, GetPostParams, CreatePostDto } from 'src/types';

interface UsePostsRepository {
  getPosts: (params?: GetPostParams) => Promise<Post[]>;
  createPost: (params?: CreatePostDto) => Promise<void>;
}

export const usePostsRepository = (): UsePostsRepository => {
  const getPosts = async (params?: GetPostParams): Promise<Post[]> => {
    const response = await api.get<Post[]>('posts', { params });
    return response.data;
  };

  const createPost = async (params?: CreatePostDto): Promise<void> => {
    await api.post<Post[]>('posts', { params });
  };

  return { getPosts, createPost };
};
