// src/components/Header.tsx
const Projects = () => {
  const projects = [
    {
      name: "VoyagerAI",
      githublink: "",
      tech: "SwiftUI, Firebase, Google Maps",
      description:
        "Travel insights app for discovering hidden destinations using AI, live reviews, maps, and alerts."
    },
    {
      name: "Automated Vehicle Guidance System",
      githublink: "",
      tech: "Python, OpenCV, TensorFlow",
      description:
        "Prototype system for guiding self-driving vehicles using single camera module."
    },
    {
      name: "Scheduler",
      githublink: "",
      tech: "Java, Firebase",
      description:
        "Android task scheduler with push notifications to boost task completion rates."
    }
  ];

  return (
    <section className="px-6 py-10 bg-gray-50">
      <h2 className="experience-item">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="experience-item-right">
             <a
            href={proj.githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {proj.name}
          </a>
            <p className="text-sm text-gray-500">{proj.tech}</p>
            <p className="mt-2 text-base">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
