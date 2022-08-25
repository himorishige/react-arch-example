import { postsRepository } from 'src/repositories/postsRepository';

import { useApi, useGenericMutation } from './useApi';

import type { CreatePostDto, GetPostParams, Post } from 'src/types';

export const usePosts = () => {
  const usePostsQuery = (params: GetPostParams) => {
    return useApi(['posts', params], async (params) =>
      postsRepository.getPosts(params),
    );
  };

  const usePostsMutate = () => {
    return useGenericMutation<CreatePostDto, Post, Post[]>(async (params) =>
      postsRepository.createPost(params),
    );
  };

  return { usePostsMutate, usePostsQuery };
};
