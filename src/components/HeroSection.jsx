import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/profile.jpg"; // adjust path accordingly

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Image Portion with Glow and Responsive */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 1.01 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_25px_5px_rgba(139,92,246,0.6)]"
          style={{ willChange: "transform" }} // GPU acceleration
        >
          <img
            src={ProfileImage}
            srcSet={`${ProfileImage} 1x, ${ProfileImage} 2x, ${ProfileImage} 3x`}
            alt="Sweekriti Biswas"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            style={{ backfaceVisibility: "hidden", transform: "scale(1)" }}
          />
        </motion.div>

        {/* Text Portion */}
        <div className="space-y-6 text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span
              className="text-primary ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Sweekriti
            </motion.span>
            <motion.span
              className="text-gradient ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Biswas
            </motion.span>
          </h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Passionate about Machine Learning, Artificial Intelligence, and Web Development, I focus on developing intelligent models, scalable applications, and user-centric web solutions that merge innovation with real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
