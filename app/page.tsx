import Banner from "./components/banner/banner";
import Section, { SectionProps } from "./components/section/section";
import content from "../public/content.json";
import styles from "./page.module.css";

export default function Home() {
  let sections: JSX.Element[] = [];
  content.forEach((section: SectionProps) => {
    sections.push(
      <Section
        sectionId={section.sectionId}
        title={section.title}
        columns={section.columns}
        content={section.content}
      />
    );
  });

  return (
    <main className={styles.main}>
      <Banner></Banner>
      {sections}
      <footer className={styles.footer}>
        Email at <a href="mailto:pauljscott8@gmail.com">pauljscott8@gmail.com</a> or call at (215) 880-9592
        <br/>
        Updated May 30<sup>th</sup>, 2024
      </footer>
    </main>
  );
}
