import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Software Engineer",
      company: "IMAXIT",
      location: "Paris, France",
      period: "09/2024 – Present",
      description: [],
      technologies: [
        "NextJs",
        "NestJs",
        "ReactJs",
        "Prisma",
        "Shaden",
        "TailwindCSS",
        "Git",
      ],
    },
    {
      title: "Full Stack Developer (End of Studies Internship)",
      company: "Anypli",
      location: "Monastir, Tunisia",
      period: "02/2024 – 06/2024",
      description: [
        "Design and development of a platform for reading books with interactivity",
      ],
      technologies: [
        "NextJs",
        "NestJs",
        "Docker",
        "MUI",
        "Mysql",
        "TypeOrm",
        "UML",
        "Huggingface",
        "BERT",
        "Text Embedding",
        "OpenAI API",
        "Jira",
        "Bitbucket",
      ],
    },
    {
      title: "Full Stack Developer (Internship)",
      company: "Visteon Tunisia",
      location: "Tunis, Tunisia",
      period: "06/2023 – 08/2023",
      description: [
        "Participating in the preparation of the TISAX audit and development of a platform in-house.",
      ],
      technologies: ["React", "TypeScript", ".NET core", "ChakraUI", "MySQL"],
    },
    {
      title: "Full Stack Developer (Internship)",
      company: "InfoSoft",
      location: "Mahdia, Tunisia",
      period: "08/2022 – 09/2022",
      description: ["Create a website for a freelance platform."],
      technologies: ["React", "Express", "JavaScript", "MUI", "MongoDB"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 opacity-90"></div>
      <div
        className="absolute top-32 left-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
        style={{
          background: "radial-gradient(circle, #339BFF 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute bottom-32 right-20 w-48 h-48 rounded-full opacity-5 blur-3xl"
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
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My professional journey in software development, working with
            amazing teams and building impactful solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div
                  className="absolute left-6 top-24 w-0.5 h-full opacity-60"
                  style={{
                    background:
                      "linear-gradient(to bottom, #339BFF 0%, rgba(51, 155, 255, 0.2) 50%, transparent 100%)",
                  }}
                ></div>
              )}

              <div
                className="mb-8 ml-12 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 relative"
                style={{
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
                {/* Timeline dot */}
                <div
                  className="absolute -left-15 top-8 w-6 h-6 rounded-full border-4 border-gray-950 shadow-lg"
                  style={{
                    backgroundColor: "#339BFF",
                    left: "-39px",
                    boxShadow: "0 0 20px rgba(51, 155, 255, 0.5)",
                  }}
                ></div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {exp.title}
                    </h3>
                    <h4
                      className="text-xl font-semibold mb-2"
                      style={{ color: "#339BFF" }}
                    >
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col md:items-end text-gray-400 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-blue-400" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-gray-300">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: "#339BFF" }}
                      ></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
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

                {/* Subtle inner glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-5 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top right, #339BFF 0%, transparent 60%)",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional decorative elements */}
      <div
        className="absolute top-1/2 right-10 w-32 h-32 rounded-full opacity-3 blur-2xl"
        style={{
          background: "radial-gradient(circle, #339BFF 0%, transparent 70%)",
        }}
      ></div>
    </section>
  );
};

export default Experience;
