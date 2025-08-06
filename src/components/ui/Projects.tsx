import { ExternalLink, Github, Clock, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const projects = [
    {
      title: "iSmart Club",
      description:
        "A comprehensive big application for soccer team management featuring player statistics, match scheduling, training management, and team analytics. Soon to be available in France.",
      image: "https://ismart-club.com/icon.png",
      technologies: ["React", "NestJS", "Redis", "PostgreSQL", "WebSocket"],
      github: null,
      live: null,
      featured: true,
      type: "in-progress",
      location: "France",
    },
    {
      title: "iSmart Road Cup",
      description:
        "Tournament planning and management application with bracket generation, team registration, match scheduling, and real-time tournament tracking. Available soon with comprehensive tournament features.",
      image: "/api/placeholder/500/300",
      technologies: ["React", "NestJS", "Redis", "PostgreSQL", "WebSocket"],
      github: null,
      live: null,
      featured: true,
      type: "in-progress",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website showcasing projects and skills with responsive design, smooth animations, and interactive elements. Built with cutting-edge technologies for optimal performance.",
      image: "/api/placeholder/500/300",
      technologies: ["React", "shadcn/ui", "Tailwind CSS", "Vite"],
      github: "https://github.com/Aminbromdhane01/personal-portfolio",
      live: "https://demo.com",
      featured: true,
      type: "completed",
    },
    {
      title: "Nextera Energy",
      description:
        "Professional vitrine website for energy company in Tunisia featuring modern design, company services showcase, and responsive layout optimized for business presentation.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/Aminbromdhane01/nextEra-",
      live: "https://personal-portfolio-nine-drab-72.vercel.app/",
      featured: false,
      type: "completed",
      location: "Tunisia",
    },
    {
      title: "Book Recommendations App",
      description:
        "AI-powered book recommendation system using machine learning algorithms with user preferences analysis, personalized suggestions, and comprehensive book database integration.",
      image: "/api/placeholder/400/250",
      technologies: [
        "Next.js",
        "React",
        "TypeORM",
        "PostgreSQL",
        "Hugging Face",
        "OpenAI",
      ],
      github: [
        {
          name: "Frontend",
          url: "https://github.com/Aminbromdhane01/lecturify-front",
        },
        {
          name: "Backend",
          url: "https://github.com/Aminbromdhane01/Lecturify-back",
        },
      ],
      live: null,
      featured: false,
      type: "completed",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const getStatusBadge = (type, location) => {
    if (type === "in-progress") {
      return (
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
            <Clock size={12} />
            In Progress
          </span>
          {location && (
            <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              <MapPin size={12} />
              {location}
            </span>
          )}
        </div>
      );
    }
    return location ? (
      <div className="flex items-center gap-2 mb-3">
        <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
          <MapPin size={12} />
          {location}
        </span>
      </div>
    ) : null;
  };

  const GitHubButton = ({ project, size = "normal" }) => {
    const isSmall = size === "small";
    const iconSize = isSmall ? 14 : 16;

    if (!project.github) return null;

    // Single GitHub repo
    if (typeof project.github === "string") {
      return (
        <button
          className={`flex items-center gap-2 ${
            isSmall ? "px-3 py-2 text-sm" : "px-4 py-2"
          } rounded-lg font-medium border-2 transition-all duration-300 hover:scale-105`}
          style={{
            borderColor: "#339BFF",
            color: "#339BFF",
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github size={iconSize} />
            {!isSmall && "Code"}
          </a>
        </button>
      );
    }

    // Multiple GitHub repos - dropdown menu
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 ${
            isSmall ? "px-3 py-2 text-sm" : "px-4 py-2"
          } rounded-lg font-medium border-2 transition-all duration-300 hover:scale-105`}
          style={{
            borderColor: "#339BFF",
            color: "#339BFF",
          }}
        >
          <Github size={iconSize} />
          {!isSmall && "Code"}
          <ChevronDown
            size={iconSize}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div
            className=" overflow-y-auto  mt-2 left-0 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50 min-w-32"
            style={{
              background:
                "linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(17, 24, 39, 0.98) 100%)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            {project.github.map((repo, index) => (
              <a
                key={index}
                onClick={() => console.log("hhh")}
                target="_blank"
                href={repo.url}
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm text-gray-200 hover:text-blue-400 hover:bg-gray-700/50 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg border-b border-gray-600/50 last:border-b-0"
              >
                <Github size={14} />
                {repo.name}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  const getProjectButtons = (project) => {
    if (project.type === "in-progress") {
      return (
        <div className="flex gap-4">
          <button
            disabled
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-400 font-medium cursor-not-allowed opacity-50"
            style={{
              backgroundColor: "#374151",
              border: "1px solid #4B5563",
            }}
          >
            <Clock size={16} />
            Coming Soon
          </button>
        </div>
      );
    }

    return (
      <div className="flex gap-4">
        {project.live && (
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#339BFF",
              boxShadow: "0 4px 20px rgba(51, 155, 255, 0.3)",
            }}
          >
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </button>
        )}
        <GitHubButton project={project} />
        {!project.live && !project.github && (
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "#339BFF",
              color: "#339BFF",
            }}
          >
            <Github size={16} />
            Private Code
          </button>
        )}
      </div>
    );
  };

  const getProjectButtonsSmall = (project) => {
    if (project.type === "in-progress") {
      return (
        <div className="flex gap-2">
          <button
            disabled
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-gray-400 text-sm font-medium cursor-not-allowed opacity-50"
            style={{
              backgroundColor: "#374151",
              border: "1px solid #4B5563",
            }}
          >
            <Clock size={14} />
            Soon
          </button>
        </div>
      );
    }

    return (
      <div className="flex gap-2">
        {project.live && (
          <button
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#339BFF",
              boxShadow: "0 4px 20px rgba(51, 155, 255, 0.3)",
            }}
          >
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white w-full"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          </button>
        )}
        <GitHubButton project={project} size="small" />
        {!project.live && !project.github && (
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "#339BFF",
              color: "#339BFF",
            }}
          >
            <Github size={14} />
          </button>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/50 relative">
      {/* Click outside to close dropdowns */}
      <div
        className="fixed inset-0 z-40"
        onClick={() => setOpenDropdowns({})}
        style={{
          display: Object.keys(openDropdowns).some((key) => openDropdowns[key])
            ? "block"
            : "none",
        }}
      />

      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900 opacity-80"></div>
      <div
        className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
        style={{
          background: "radial-gradient(circle, #339BFF 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute bottom-32 right-32 w-48 h-48 rounded-full opacity-5 blur-3xl"
        style={{
          background: "radial-gradient(circle, #66B3FF 0%, transparent 70%)",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #339BFF 0%, #66B3FF 50%, #1A8FFF 100%)",
            }}
          >
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and
            passion for creating exceptional digital experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 200}ms`,
                background:
                  "linear-gradient(135deg, rgba(31, 41, 55, 0.4) 0%, rgba(17, 24, 39, 0.6) 100%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#339BFF";
                e.currentTarget.style.boxShadow =
                  "0 10px 40px rgba(51, 155, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#374151";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="aspect-video p-1 relative"
                style={{
                  background:
                    "linear-gradient(135deg, #339BFF 0%, #66B3FF 50%, #1A8FFF 100%)",
                }}
              >
                <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-4xl font-bold text-gray-400 z-10">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  {/* Subtle pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, #339BFF 0%, transparent 50%)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="p-6">
                {getStatusBadge(project.type, project.location)}
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-gray-700/50 text-gray-200 border border-gray-600 hover:border-blue-400/50 transition-all duration-200 hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(31, 41, 55, 0.9) 100%)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {getProjectButtons(project)}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                style={{
                  animationDelay: `${(index + 2) * 100}ms`,
                  background:
                    "linear-gradient(135deg, rgba(31, 41, 55, 0.4) 0%, rgba(17, 24, 39, 0.6) 100%)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#339BFF";
                  e.currentTarget.style.boxShadow =
                    "0 10px 40px rgba(51, 155, 255, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#374151";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="p-6">
                  <div
                    className="aspect-video p-1 rounded-lg mb-4 relative"
                    style={{
                      background:
                        "linear-gradient(135deg, #339BFF 0%, #66B3FF 50%, #1A8FFF 100%)",
                    }}
                  >
                    <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="text-2xl font-bold text-gray-400 z-10">
                        {project.title
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      {/* Subtle pattern overlay */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 30% 30%, #339BFF 0%, transparent 50%)",
                        }}
                      ></div>
                    </div>
                  </div>
                  {getStatusBadge(project.type, project.location)}
                  <h4 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-200 border border-gray-600"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(31, 41, 55, 0.9) 100%)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span
                        className="px-2 py-1 text-xs rounded-full border"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(31, 41, 55, 0.9) 100%)",
                          borderColor: "#339BFF",
                          color: "#339BFF",
                        }}
                      >
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  {getProjectButtonsSmall(project)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div
        className="absolute top-1/3 right-10 w-32 h-32 rounded-full opacity-3 blur-2xl"
        style={{
          background: "radial-gradient(circle, #339BFF 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute bottom-1/4 left-32 w-24 h-24 rounded-full opacity-4 blur-2xl"
        style={{
          background: "radial-gradient(circle, #66B3FF 0%, transparent 70%)",
        }}
      ></div>
    </section>
  );
};

export default Projects;
