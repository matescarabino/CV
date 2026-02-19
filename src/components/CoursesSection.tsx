import { CVData } from "@/data/cv_data";
import Section from "./Section";

interface CoursesSectionProps {
  data: CVData["sections"]["courses"];
}

export default function CoursesSection({ data }: CoursesSectionProps) {
  return (
    <Section title={data.title} iconClass="fas fa-laptop" className="courses-section">
      {data.items.map((item, index) => (
        <div className="item" key={index}>
          <div className="meta">
            <div className="upper-row">
              <h3 className="job-title">{item.title}</h3>
              <div className="time">{item.time}</div>
            </div>
            <div className="company">{item.institution}</div>
          </div>
          {item.certificate && (
             <div className="details">
             <p>
               <a href={item.certificate.url} target="new">
                 Ver certificado online
               </a>
               &nbsp;&nbsp; -&nbsp;&nbsp; Codigo verificación:
               <b> {item.certificate.code}</b>
             </p>
           </div>
          )}
        </div>
      ))}
    </Section>
  );
}
