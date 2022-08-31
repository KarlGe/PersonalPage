import useSWRImmutable from "swr/immutable";
import { getPost } from "../api/posts";

export const usePostList = (slug: string) => {
  const { data, error } = useSWRImmutable(slug, getPost);
  return { data, error };
};
