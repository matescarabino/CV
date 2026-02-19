interface SectionProps {
  title: string;
  iconClass: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, iconClass, children, className = "" }: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <h2 className="section-title">
        <span className="icon-holder">
          <i className={iconClass}></i>
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}
