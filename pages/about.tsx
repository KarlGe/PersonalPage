import React from "react";
import useSWRImmutable from "swr/immutable";
import { getAboutPage } from "../src/api/pages";
import AboutView from "../src/components/AboutView/AboutView";

export default function Home() {
  const { data, error } = useSWRImmutable("about", getAboutPage);
  if (!data) {
    return null;
  }
  const aboutData = data[0];

  return (
    <div>
      <AboutView aboutData={aboutData} />
    </div>
  );
}
