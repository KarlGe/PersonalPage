import React from "react";
import PostPreview from "../PostPreview";
import { listStyle } from "./postList.linaria";

type Props = { posts: any };

function PostList({ posts }: Props) {
  return (
    <div className={listStyle}>
      {posts?.map((post) => (
        <PostPreview key={post.slug.current} basePath="portfolio" postPreview={post} />
      ))}
    </div>
  );
}

export default PostList;
