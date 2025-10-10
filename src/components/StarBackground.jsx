import { useState, useEffect } from "react";
import { cn } from "@/lib/utils"; // Utility to merge class names

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 8000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const isSpecial = Math.random() < 0.1; // 10% chance of special star
      const size = isSpecial
        ? Math.random() * 6 + 4 // bigger stars (4px to 10px)
        : Math.random() * 2 + 1; // small stars (1px to 3px)

      newStars.push({
        id: i,
        size,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: isSpecial ? 1 : Math.random() * 0.5 + 0.3,
        twinkleDuration: isSpecial ? Math.random() * 2 + 1 : Math.random() * 3 + 2,
        isSpecial,
      });
    }

    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className={cn(
            "star animate-twinkle",
            star.isSpecial && "star-special",
            "bg-white dark:bg-white light:bg-primary"
          )}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.twinkleDuration}s`,
            position: "absolute",
          }}
        />
      ))}
    </div>
  );
};
