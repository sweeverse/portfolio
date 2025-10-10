import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Python", level: 90, category: "languages" },
  { name: "C", level: 80, category: "languages" },
  { name: "Java", level: 85, category: "languages" },
  { name: "SQL", level: 80, category: "languages" },

  // Frontend
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express.js", level: 70, category: "backend" },
  { name: "Flask", level: 75, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },

  // Libraries / Frameworks
  { name: "NumPy", level: 90, category: "libraries" },
  { name: "Pandas", level: 90, category: "libraries" },
  { name: "Matplotlib", level: 85, category: "libraries" },
  { name: "Scikit-learn", level: 85, category: "libraries" },
  { name: "TensorFlow", level: 80, category: "libraries" },

  // Tools
  { name: "GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Jupyter Notebook", level: 90, category: "tools" },
  { name: "Windows", level: 95, category: "tools" },
  { name: "Linux (Basic)", level: 70, category: "tools" },
];

const categories = [
  "all",
  "languages",
  "frontend",
  "backend",
  "libraries",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Gradient Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden relative">
                <div
                  className="h-2 rounded-full shadow-[0_0_6px_rgba(139,92,246,0.4)] transition-all duration-700 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(
                      to right,
                      rgba(139, 92, 246, 0.5) 0%,
                      rgba(139, 92, 246, 0.7) ${skill.level / 2}%,
                      rgba(139, 92, 246, 1) ${skill.level}%
                    )`,
                  }}
                />
              </div>

              {/* Percentage Label */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
