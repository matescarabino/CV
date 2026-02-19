import { CVData } from "@/data/cv_data";
import Section from "./Section";

interface ExperienceSectionProps {
  data: CVData["sections"]["experience"];
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <Section title={data.title} iconClass="fas fa-briefcase" className="experiences-section">
      {data.items.map((item, index) => (
        <div className="item" key={index}>
          <div className="meta">
            <div className="upper-row">
              <h3 className="job-title">{item.title}</h3>
              <div className="time">{item.time}</div>
            </div>
          </div>
          <div className="details">
            {item.details.map((detail, dIndex) => (
              <p key={dIndex} dangerouslySetInnerHTML={{__html: detail}} />
            ))}
            
            {item.projects && (
                <>
                    <h4>{item.projects.title}</h4>
                    <ul>
                        {item.projects.items.map((project, pIndex) => (
                            <li key={pIndex} dangerouslySetInnerHTML={{__html: project}} />
                        ))}
                    </ul>
                </>
            )}

            {item.link && (
                 <a href={item.link.url} target="new">{item.link.text}</a>
            )}
          </div>
        </div>
      ))}
    </Section>
  );
}
