import useSWRImmutable from "swr/immutable";
import { Category, getPostList } from "../api/posts";

export const usePostList = (category: Category) => {
  const { data, error } = useSWRImmutable(`postList-${category}`, () => getPostList(category));
  return { data, error };
};
