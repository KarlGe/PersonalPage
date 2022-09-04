import { useRouter } from "next/router";
import sanityClient from "../../src/sanity";
import React, { useEffect, useState } from "react";
import Post from "../../src/components/Post";
import Layout from "../../src/components/Layout/Layout";

function Slug(props) {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  useEffect(() => {
    if (!slug) {
      return;
    }
    const query =
      '*[_type == "post" && slug.current == $slug]{body, "imageUrl": mainImage.asset->url, slug, title}';
    const params = { slug };
    sanityClient.fetch(query, params).then((postResults) => {
      setPost(postResults[0]);
    });
  }, [slug]);

  if (!post) {
    return null;
  }

  return <Post post={post} />;
}

export default Slug;
