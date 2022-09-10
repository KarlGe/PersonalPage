import { cx } from "linaria";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { useStore } from "../../store/store";
import { layoutStyle } from "./layout.linaria";
import { globalStyles } from "./global.linaria";
import SectionLink from "./SectionLink";

type Props = {
  children: ReactNode;
  className?: string;
};

function Layout({ children, className }: Props) {
  const { data, error } = useSiteSettings();
  const { pageTitle, layoutVariant } = useStore();
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <div
      className={cx(
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
                  <SectionLink href="/" currentPath={pathname}>
                    Portfolio
                  </SectionLink>
                </li>
                <li>
                  <SectionLink href="/about" currentPath={pathname}>
                    About
                  </SectionLink>
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
        <div className="main-content">{children}</div>
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
