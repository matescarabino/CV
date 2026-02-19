import { CVData } from "@/data/cv_data";
import Sidebar from "./Sidebar";
import Section from "./Section";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import CoursesSection from "./CoursesSection";

interface CVPageProps {
  data: CVData;
}

export default function CVPage({ data }: CVPageProps) {
  return (
    <div className="wrapper">
      <Sidebar data={data.profile} />

      <div className="main-wrapper">
        <Section title={data.sections.profile.title} iconClass="fas fa-user" className="summary-section">
            <div className="summary">
                <p>{data.sections.profile.content}</p>
            </div>
        </Section>

        <EducationSection data={data.sections.education} />
        
        <ExperienceSection data={data.sections.experience} />

        <CoursesSection data={data.sections.courses} />
      </div>
    </div>
  );
}
