import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import PostPreview from "../src/components/PostPreview";
import sanityClient from "../src/sanity";

export default function Home() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const query =
      '*[_type == "post"]{body, "imageUrl": mainImage.asset->url, slug, title}';
    const params = {};
    sanityClient.fetch(query, params).then((postResults) => {
      setPosts(postResults);
    });
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Karl G. Georgsen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Page title</h1>
        <div>
          {posts?.map((post) => (
            <PostPreview basePath="portfolio" postPreview={post} />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
