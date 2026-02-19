import { CVData } from "@/data/cv_data";


interface SidebarProps {
  data: CVData["profile"];
}

export default function Sidebar({ data }: SidebarProps) {
  return (
    <div className="sidebar-wrapper">
      <div className="profile-container">
        <img
            className="profile"
            src={data.image}
            alt="Profile Picture"
        />
       
        <h1 className="name">{data.name}</h1>
        <h3 className="tagline">{data.role}</h3>
        <h3 className="tagline">{data.role2}</h3>
        <div className="time">
            <br />
            {data.birthDate} <br />
            {data.location}
        </div>
        

      </div>


      <div className="contact-container container-block">
        <div className="email">
          <i className="fas fa-envelope"></i>
          <a href={`mailto: ${data.contact.email}`}>{data.contact.email}</a>
        </div>
        <div className="phone">
          <i className="fab fa-whatsapp"></i>
          <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
        </div>
        <div className="linkedin">
          <i className="fab fa-linkedin-in"></i>
          <a href={`https://www.linkedin.com/in${data.contact.linkedin}`} target="new">
            {data.contact.linkedin}
          </a>
        </div>
        <div className="github">
          <i className="fab fa-github"></i>
          <a href={`https://github.com${data.contact.github}`} target="new">
            {data.contact.github}
          </a>
        </div>

        <br />
        <br />

        <h2 className="container-block-title">Tecnologías</h2>
        <ul className="list-unstyled interests-list">
          {data.technologies.map((tech, index) => (
            <li key={index}>
              <b>{tech}</b>
            </li>
          ))}
        </ul>

        <br />
        <br />

        <h2 className="container-block-title">Idiomas</h2>
        <div className="languages-container">
          {data.languages.map((lang, index) => (
            <div key={index} className="mb-4">
                <div className="font-bold mb-1">{lang.name}:</div>
                {lang.items.map((item, i) => (
                    <div key={i} className="mb-1">
                         {item.details.join("/")}
                         <span className="lang-desc whitespace-nowrap">&nbsp; {item.level}</span>
                    </div>
                ))}
            </div>
          ))}
        </div>

        <br />
        <br />
      </div>
    </div>
  );
}
