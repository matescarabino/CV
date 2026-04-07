import { CVData } from "@/data/cv_data";
import Section from "./Section";

interface PersonalProjectsSectionProps {
  data: CVData["sections"]["personalProjects"];
  className?: string;
}

export default function PersonalProjectsSection({ data, className = "" }: PersonalProjectsSectionProps) {
  return (
    <Section title={data.title} iconClass="fas fa-rocket" className={`experiences-section ${className}`.trim()}>
      {data.items.map((item, index) => (
        <div className="item" key={index}>
          <div className="meta">
            <div className="upper-row">
              <h3 className="job-title">{item.title}</h3>
              <div className="time">{item.time}</div>
            </div>
            <div className="company">{item.role}</div>
          </div>

          <div className="details">
            {item.details.map((detail, dIndex) => (
              <p key={dIndex} dangerouslySetInnerHTML={{ __html: detail }} />
            ))}

            {item.link && (
              <a href={item.link.url} target="new">
                {item.link.text}
              </a>
            )}
          </div>
        </div>
      ))}
    </Section>
  );
}
