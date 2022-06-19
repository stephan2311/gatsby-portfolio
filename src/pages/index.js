import React from "react";
import {
  AboutSection,
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
      <Seo title="Portfolio Page from Stephan Geyer" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ProjectsSection sectionId="work" heading="Work" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="techstack" heading="Tech Stack" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
