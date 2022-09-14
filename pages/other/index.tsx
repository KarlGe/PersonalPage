import React, { useEffect } from "react";
import PostList from "../../src/components/PostList/PostList";
import { useLayoutSettings } from "../../src/hooks/useLayoutSettings";
import { usePostList } from "../../src/hooks/usePostList";

type Props = {};

function OtherPage({}: Props) {
  useLayoutSettings(null, "default");

  const { data, error } = usePostList("Other");
  return <PostList posts={data} basePath="other" />;
}

export default OtherPage;
