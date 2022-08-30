import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Karl G. Georgsen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Page title</h1>
      </main>

      <footer></footer>
    </div>
  );
}
