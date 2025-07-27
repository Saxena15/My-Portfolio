const Experience = () => {
  const experiences = [
    {
      company: "Paytm",
      imageURL: "https://media.licdn.com/dms/image/v2/D560BAQGimDr9TQiNUA/company-logo_200_200/B56ZYJb2xuHEAU-/0/1743915020166?e=1756339200&v=beta&t=xm1FMHOwa3EqDddXX9osHSQYLWQ1qhr4OUCue3d99ts",
      title: "Senior Software Engineer - Mobile App",
      location: "Noida",
      date: "Feb '25 - Present",
      points: [
        "Developed scalable iOS features using Swift, SwiftUI, and UIKit.",
        "Led migration to SwiftUI with Combine, improving performance.",
        "Integrated PWAs with native JS, reducing delivery time."
      ]
    },
    {
      company: "Ather Energy",
      imageURL: "https://media.licdn.com/dms/image/v2/D4D0BAQGa0fPUKCRWuQ/company-logo_200_200/company-logo_200_200/0/1704522121216/ather_energy_logo?e=1756339200&v=beta&t=pN-1prW44f7zVPzicF7__KPIzNWgvOnlubFiC5b4vk0",
      title: "Software Engineer - iOS",
      location: "Bengaluru",
      date: "July '22 - Jan '25",
      points: [
        "Implemented Kotlin Multi-platform Mobile (KMM) for shared logic.",
        "Built HALO Smart Helmet using CoreBluetooth.",
        "Reduced app loading time by 30%.",
        "Migrated Swift to SwiftUI using Combine."
      ]
    },
    {
      company: "Rezo.ai",
      imageUrl: "https://media.licdn.com/dms/image/v2/D560BAQGHb9LOqxmzIw/company-logo_200_200/company-logo_200_200/0/1703849216988/rezo_ai_logo?e=1756339200&v=beta&t=8pFrKi16dfSbzZh0JTeCSpETLMauyi6oFIQQuF58Tzo",
      title: "Software Engineer - Backend",
      location: "Noida",
      date: "Jan '22 - Jun '22",
      points: [
        "Created bot interfaces, reducing manual effort by 100%.",
        "Handled 10K+ requests/min with Spring Boot APIs."
      ]
    }
  ];

  return (
    <section className="px-6 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="experience-item">
          <div>
            <span>
              <p className="experience-item-left"> <img src={exp.imageURL} alt={exp.company} className="company-logo"/> </p>
            </span>
            
          </div>
          <div className="experience-item-right">
            <h3 className="experience-heading">
              <span>{exp.title}</span>
              <span>{exp.date}</span>
            </h3>
            <ul className="ul">
              {exp.points.map((point, i) => (
                <li key={i} className="list-none flex items-start">
                  <span className="mr-2 mt-1"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

          </div>


        </div>
      ))}
    </section>
  );
};

export default Experience;
