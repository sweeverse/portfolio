import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Diabetes Progression Predictor",
    description:
      "A machine learning web application using Ridge Linear Regression to predict diabetes progression. The model is deployed via Flask API and integrated with a Firebase-hosted frontend for real-time predictions.",
    image: "../projects/image1.jpg",
    tags: ["Python", "Flask", "Firebase", "ML"],
    githubUrl: "https://github.com/sweeverse/diabetes-prediction-app",
  },
  {
    id: 2,
    title: "AI Email Assistant",
    description:
      "A full-stack intelligent email reply generator powered by Google Gemini 2.0 API. Integrates with Gmail via a Chrome Extension and uses a Spring Boot backend to generate AI-driven email responses.",
    image: "../projects/image2.jpg",
    tags: ["Spring Boot", "Java", "Gemini API", "Chrome Extension"],
    githubUrl: "https://github.com/sweeverse/ai-email-assistant",
  },
  {
    id: 3,
    title: "Wearable AI for Early Detection of Parkinson’s & Alzheimer’s",
    description:
      "An AI-powered wearable concept that detects early signs of neurodegenerative diseases using motion tracking, speech analysis, and biometric data — integrating sensors, ML models, and ethical AI for proactive healthcare.",
    image: "../projects/image3.jpg",
    tags: ["AI", "TensorFlow", "Embedded Systems", "Healthcare"],
    pdfUrl: "/projects/Wearable_AI_for_Early_Detection.pdf",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Here are some of my recent and conceptual projects — each crafted with
          a focus on innovation, usability, and real-world problem solving.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/30 border border-border flex flex-col"
            >
              {/* Image Section */}
              <div className="h-52 bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {project.description}
                </p>

                {/* Links Section */}
                <div className="flex justify-end mt-4 space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.pdfUrl && (
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sweeverse"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
