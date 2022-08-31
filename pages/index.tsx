import React from "react";
import { usePostList } from "../src/hooks/usePostList";
import PostList from "../src/components/PostList/PostList";

export default function Home() {
  const { data, error } = usePostList();

  return (
    <>
      <PostList posts={data} />
    </>
  );
}
