import useSWRImmutable from "swr/immutable";
import { getPostList } from "../api/posts";

export const usePostList = () => {
  const { data, error } = useSWRImmutable("posts", getPostList);
  return { data, error };
};
