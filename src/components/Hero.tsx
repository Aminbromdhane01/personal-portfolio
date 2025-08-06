import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const titles = [
      "Software Engineer",
      "Full Stack Developer",
      "React Specialist",
      "NestJS Specialist",
      "Problem Solver",
    ];
    const tick = () => {
      const currentFullTitle = titles[titleIndex];
      const updatedTitle = isDeleting
        ? currentFullTitle.substring(0, currentTitle.length - 1)
        : currentFullTitle.substring(0, currentTitle.length + 1);

      setCurrentTitle(updatedTitle);

      if (!isDeleting && updatedTitle === currentFullTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedTitle === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(tick, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentTitle, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950"
    >
      {/* Background gradient with #339BFF */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-950/20 to-blue-900/30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl text-white font-bold mb-4">
              Hi, I'm{" "}
              <span
                className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #339BFF 0%, #66B3FF 50%, #1A8FFF 100%)",
                }}
              >
                Med Amine Ben Romdhane
              </span>
            </h1>
            <div className="text-2xl md:text-4xl h-12 flex items-center justify-center">
              <span className="text-blue-300" style={{ color: "#66B3FF" }}>
                {currentTitle}
              </span>
              <span className="animate-pulse text-blue-400 ml-1">|</span>
            </div>
          </div>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I craft exceptional digital experiences with modern technologies.
            Passionate about clean code, user experience, and solving complex
            problems.
          </p>

          <div className="flex items-center justify-center gap-6 mb-12">
            <button
              className="px-8 py-4 text-lg font-medium text-white rounded-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-blue-500/25"
              style={{
                backgroundColor: "#339BFF",
                boxShadow: "0 4px 20px rgba(51, 155, 255, 0.3)",
              }}
            >
              <a
                href="#projects"
                className="flex items-center gap-2 text-white"
              >
                View My Work
                <ArrowDown size={20} />
              </a>
            </button>
            <button
              className="px-8 py-4 text-lg font-medium text-blue-300 border-2 rounded-lg transition-all duration-300 hover:scale-105 transform hover:bg-blue-500/10"
              style={{
                borderColor: "#339BFF",
                color: "#339BFF",
              }}
            >
              <a href="#contact">Get In Touch</a>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Aminbromdhane01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-gray-300 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:bg-gray-800 hover:shadow-lg"
              style={{
                transition: "all 0.3s ease",
              }}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-amine-ben-romdhane-1a3a2927b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-gray-300 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:bg-gray-800 hover:shadow-lg"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mohamedaminebenromdhane01@gmail.com"
              className="p-4 text-gray-300 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:bg-gray-800 hover:shadow-lg"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements with #339BFF */}
      <div
        className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl animate-pulse"
        style={{
          backgroundColor: "rgba(51, 155, 255, 0.15)",
          animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-xl animate-pulse"
        style={{
          backgroundColor: "rgba(51, 155, 255, 0.1)",
          animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          animationDelay: "1s",
        }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-16 h-16 rounded-full blur-2xl animate-pulse"
        style={{
          backgroundColor: "rgba(51, 155, 255, 0.08)",
          animation: "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          animationDelay: "2s",
        }}
      ></div>

      {/* Additional subtle glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #339BFF 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full opacity-5 blur-3xl"
          style={{
            background: "radial-gradient(circle, #66B3FF 0%, transparent 70%)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
