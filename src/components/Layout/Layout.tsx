import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { useStore } from "../../store/store";
import { globalStyles, layoutStyle } from "./layout.linaria";

type Props = {
  children: ReactNode;
  className?: string;
};

function Layout({ children, className }: Props) {
  const { data, error } = useSiteSettings();
  const { pageTitle, layoutVariant } = useStore();
  return (
    <div
      className={classNames(
        "page-wrapper",
        layoutStyle,
        globalStyles,
        layoutVariant,
        className
      )}
    >
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
          <div className="header-start">
            <h1>
              <Link href="/">
                <a className="page-title">{data?.title}</a>
              </Link>
            </h1>
            <p className="site-description">{data?.description}</p>
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
          </div>
          {pageTitle && (
            <div>
              <h2>{pageTitle}</h2>
            </div>
          )}
        </header>
        {children}
      </main>
      <footer></footer>
    </div>
  );
}

Layout.defaultProps = {
  title: undefined,
  variant: undefined,
  className: undefined,
};

export default Layout;
