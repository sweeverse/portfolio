import { Brain, Server, Cloud } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Intro */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate AI Enthusiast & Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I’m a Computer Science student specializing in Artificial
              Intelligence and Machine Learning. My work combines modern web
              technologies with intelligent systems to create impactful
              real-world solutions.
            </p>

            <p className="text-muted-foreground">
              From building end-to-end ML web applications to developing AI-powered tools
              like an email assistant and wearable health concept, I focus on integrating
              usability, scalability, and innovation in every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/SweekritiBiswas_CV.pdf" // update if CV filename differs
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Section - Skills Highlights */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Experienced in implementing ML models and AI systems such as
                    diabetes progression prediction and intelligent email automation.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building complete web applications using React, Flask, and
                    Spring Boot, integrating APIs and backend logic for intelligent systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & API Integration</h4>
                  <p className="text-muted-foreground">
                    Skilled in deploying models and applications using Firebase, Flask
                    APIs, and Gemini API, ensuring secure and scalable system design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
