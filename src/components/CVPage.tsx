import { CVData } from "@/data/cv_data";
import Sidebar from "./Sidebar";
import Section from "./Section";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import CoursesSection from "./CoursesSection";
import PersonalProjectsSection from "./PersonalProjectsSection";
import DevPdfButton from "./DevPdfButton";

interface CVPageProps {
  data: CVData;
}

export default function CVPage({ data }: CVPageProps) {
  return (
    <div className="wrapper">
      <DevPdfButton />
      <Sidebar data={data.profile} />

      <div className="main-wrapper">
        <Section title={data.sections.profile.title} iconClass="fas fa-user" className="summary-section">
          <div className="summary">
            <p>{data.sections.profile.content}</p>
          </div>
        </Section>

        <EducationSection data={data.sections.education} />

        <ExperienceSection data={data.sections.experience} />

        <PersonalProjectsSection data={data.sections.personalProjects} className="personal-projects-section" />

        <CoursesSection data={data.sections.courses} />
      </div>
    </div>
  );
}
