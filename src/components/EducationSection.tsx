import { CVData } from "@/data/cv_data";
import Section from "./Section";

interface EducationSectionProps {
  data: CVData["sections"]["education"];
}

export default function EducationSection({ data }: EducationSectionProps) {
    return (
        <Section title={data.title} iconClass="fas fa-book-open" className="experiences-section">
            {data.items.map((item, index) => (
                <div className="item" key={index}>
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">{item.title}</h3>
                            <div className="time">{item.time}</div>
                        </div>
                        <div className="company">
                            {item.institution}
                        </div>
                    </div>
                    {item.link && (
                        <div className="details">
                            <a href={item.link.url} download target="new">
                                {item.link.text}
                            </a>
                        </div>
                    )}
                    <div className="details"></div>
                </div>
            ))}
        </Section>
    );
}
