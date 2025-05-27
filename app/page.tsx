import dynamic from "next/dynamic";
import I18nLayout from "./i18n-layout";

const About = dynamic(() => import("@/components/about"), { ssr: false });
const Experience = dynamic(() => import("@/components/experience"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
const Intro = dynamic(() => import("@/components/intro"), { ssr: false });
const Projects = dynamic(() => import("@/components/projects"), { ssr: false });
const SectionDivider = dynamic(() => import("@/components/section-divider"), { ssr: false });
const Skills = dynamic(() => import("@/components/skills"), { ssr: false });

export default function Home() {
  return (
    <I18nLayout>
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </main>
    </I18nLayout>
  )
}
