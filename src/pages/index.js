import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Chris Young" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="details" heading="Interests and Skills" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <ArticlesSection sectionId="articles" heading="Latest Medium Articles" sources={['Medium']} />
        <ContactSection sectionId="github" heading="Get in touch" />
      </Page>
    </>
  );
}
