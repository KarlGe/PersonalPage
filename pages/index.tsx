import React from "react";
import { usePostList } from "../src/hooks/usePostList";
import PostList from "../src/components/PostList/PostList";
import Layout from "../src/components/Layout/Layout";

export default function Home() {
  const { data, error } = usePostList();

  return (
    <Layout>
      <PostList posts={data} />
    </Layout>
  );
}
