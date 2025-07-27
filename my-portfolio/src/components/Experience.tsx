const Experience = () => {
  const experiences = [
    {
      company: "Paytm (One97)",
      title: "Senior Software Engineer - Mobile App",
      location: "Noida",
      date: "Feb 2025 - Present",
      points: [
        "Developed scalable iOS features using Swift, SwiftUI, and UIKit.",
        "Led migration to SwiftUI with Combine, improving performance.",
        "Integrated PWAs with native JS, reducing delivery time."
      ]
    },
    {
      company: "Ather Energy",
      title: "Software Engineer - iOS",
      location: "Bengaluru",
      date: "July 2022 - Jan 2025",
      points: [
        "Implemented Kotlin Multi-platform Mobile (KMM) for shared logic.",
        "Built HALO Smart Helmet using CoreBluetooth.",
        "Reduced app loading time by 30%.",
        "Migrated Swift to SwiftUI using Combine."
      ]
    },
    {
      company: "Rezo.ai",
      title: "Software Engineer - Backend",
      location: "Noida",
      date: "Jan 2022 - Jun 2022",
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
        <div key={idx} className="mb-8">
          <h3 className="text-xl font-semibold">{exp.title} – {exp.company}</h3>
          <p className="text-sm text-gray-500">{exp.location} | {exp.date}</p>
          <ul className="list-disc ml-6 mt-3 text-gray-700 text-base space-y-1">
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
