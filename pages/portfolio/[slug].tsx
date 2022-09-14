import { useRouter } from "next/router";
import React from "react";
import Post from "../../src/components/Post";
import { useLayoutSettings } from "../../src/hooks/useLayoutSettings";
import { usePost } from "../../src/hooks/usePost";

function Slug(props) {
  const router = useRouter();
  const { slug } = router.query;

  useLayoutSettings(null, "post");
  const { data, error } = usePost(slug as string);


  if (!data || !data[0]) {
    return null;
  }

  const post = data[0];

  return <Post post={post} />;
}

export default Slug;
