// src/components/Header.tsx
const Projects = () => {
  const projects = [
    {
      name: "VoyagerAI",
      tech: "SwiftUI, Firebase, Google Maps",
      description:
        "Travel insights app for discovering hidden destinations using AI, live reviews, maps, and alerts."
    },
    {
      name: "Automated Vehicle Guidance System",
      tech: "Python, OpenCV, TensorFlow",
      description:
        "Prototype system for guiding self-driving vehicles using single camera module."
    },
    {
      name: "Scheduler",
      tech: "Java, Firebase",
      description:
        "Android task scheduler with push notifications to boost task completion rates."
    }
  ];

  return (
    <section className="px-6 py-10 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="border p-5 rounded-md shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-1">{proj.name}</h3>
            <p className="text-sm text-gray-500">{proj.tech}</p>
            <p className="mt-2 text-base">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
