import Link from "next/link";
import React from "react";

type Props = { href: string; currentPath: string; children: string };

function SectionLink({ href, currentPath, children }: Props) {
  const active = href === currentPath;
  return (
    <Link href={href}>
      <a className={active ? "active" : ""}>{children}</a>
    </Link>
  );
}

export default SectionLink;
