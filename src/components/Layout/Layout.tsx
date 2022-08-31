import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { globalStyles, layoutStyle } from "./layout.linaria";

type Props = { children: ReactNode };

function Layout({ children }: Props) {
  const { data, error } = useSiteSettings();
  return (
    <div className={`page-wrapper ${layoutStyle} ${globalStyles}`}>
      <Head>
        <title>{data?.title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Source Sans Pro:regular,bold,italic,black"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <h1>
            <Link href="/">
              <a className="page-title">{data?.title}</a>
            </Link>
          </h1>
          <p>{data?.description}</p>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </main>

      <footer></footer>
    </div>
  );
}

export default Layout;
