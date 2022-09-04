import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { globalStyles, layoutStyle } from "./layout.linaria";

type LayoutVariant = "default" | "post";
type Props = {
  children: ReactNode;
  title?: string;
  variant?: LayoutVariant;
  className?: string;
};

function Layout({ children, title, variant, className }: Props) {
  const { data, error } = useSiteSettings();
  return (
    <div
      className={classNames(
        "page-wrapper",
        layoutStyle,
        globalStyles,
        variant,
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
          {title && (
            <div>
              <h2>{title}</h2>
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
