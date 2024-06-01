"use client";

import Banner from "./components/banner/banner";
import Section, { SectionData, SectionProps } from "./components/section/section";
import content from "../public/content.json";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

function getFlexShrink(window: Window): number {
  if (window.innerWidth <= 640) {
    return 2;
  } else if (window.innerWidth <= 1024) {
    return 1;
  } else {
    return 0;
  }
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
    window.addEventListener('resize', () => setFlexShrink(getFlexShrink(window)));
    setFlexShrink(getFlexShrink(window));
  }, []);

  return (
    <main className={styles.main}>
      <Banner></Banner>
      {sections}
      <footer className={styles.footer}>
        Email at <a href="mailto:pauljscott8@gmail.com">pauljscott8@gmail.com</a> or call at (215) 880-9592
        <br/>
        Updated May 31<sup>st</sup>, 2024
      </footer>
    </main>
  );
}
