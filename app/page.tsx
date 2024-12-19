"use client";

import Banner from "./components/banner/banner";
import Section, { SectionData } from "./components/section/section";
import content from "../public/content.json";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import Footer from "./components/footer/footer";

const MOBILE_CUTOFF = 640;
const TABLET_CUTOFF = 1024;

const MOBILE_COLUMN_ADJUST = 2;
const TABLET_COLUMN_ADJUST = 1;

export default function Home() {
  const [fewerColumns, setFewerColumns] = useState<number>(0);

  const refreshFewerColumns = () =>
    setFewerColumns(
      window.innerWidth <= MOBILE_CUTOFF
        ? MOBILE_COLUMN_ADJUST
        : window.innerWidth <= TABLET_CUTOFF
        ? TABLET_COLUMN_ADJUST
        : 0
    );

  useEffect(() => {
    window.addEventListener("resize", refreshFewerColumns);
    refreshFewerColumns();
  }, []);

  let sections: JSX.Element[] = [];
  content.forEach((sectionData: SectionData) => {
    sections.push(
      <Section
        key={sections.length}
        data={sectionData}
        fewerColumns={fewerColumns}
      />
    );
  });

  return (
    <main className={styles.main}>
      <Banner />
      {sections}
      <Footer />
    </main>
  );
}
