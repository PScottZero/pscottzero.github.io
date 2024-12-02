"use client";

import Banner from "./components/banner/banner";
import Section, { SectionData } from "./components/section/section";
import content from "../public/content.json";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import Footer from "./components/footer/footer";

const mobileCutoff = 640;
const tabletCutoff = 1024;

const mobileFlexShrink = 2;
const tabletFlexShrink = 1;
const desktopFlexShrink = 0;

function getFlexShrink(window: Window): number {
  return window.innerWidth <= mobileCutoff
    ? mobileFlexShrink
    : window.innerWidth <= tabletCutoff
    ? tabletFlexShrink
    : desktopFlexShrink;
}

export default function Home() {
  const [flexShrink, setFlexShrink] = useState<number>(0);

  let sections: JSX.Element[] = [];
  content.forEach((sectionData: SectionData) => {
    sections.push(
      <Section
        key={sections.length}
        data={sectionData}
        flexShrink={flexShrink}
      />
    );
  });

  useEffect(() => {
    window.addEventListener("resize", () =>
      setFlexShrink(getFlexShrink(window))
    );
    setFlexShrink(getFlexShrink(window));
  }, []);

  return (
    <main className={styles.main}>
      <Banner />
      {sections}
      <Footer />
    </main>
  );
}
