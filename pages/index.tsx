import React from "react";
import { usePostList } from "../src/hooks/usePostList";
import PostList from "../src/components/PostList/PostList";
import Layout from "../src/components/Layout/Layout";
import { useLayoutSettings } from "../src/hooks/useLayoutSettings";

export default function Home() {
  useLayoutSettings(null, "default");
  const { data, error } = usePostList('Portfolio');

  return <PostList posts={data} basePath="portfolio" />;
}
