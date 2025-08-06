import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Chadcn",
      ],
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      technologies: [
        "Node.js",
        "NestJs",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Redis",
      ],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      category: "DevOps",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900 opacity-80"></div>
      <div
        className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-5 blur-3xl"
        style={{
          background: "radial-gradient(circle, #339BFF 0%, transparent 70%)",
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
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer with 2+ years of experience
            building scalable web applications and mobile solutions. I love
            turning complex problems into simple, beautiful, and intuitive
            designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Started my journey in computer science at university, where I
                discovered my passion for creating digital solutions that make a
                real impact. Since then, I've worked with startups and
                established companies, always focusing on writing clean,
                efficient code.
              </p>
              <p className="leading-relaxed">
                I believe in continuous learning and staying up-to-date with the
                latest technologies. When I'm not coding, you'll find me
                contributing to open source projects, writing technical
                articles, or exploring new frameworks.
              </p>
              <p className="leading-relaxed">
                My approach to development emphasizes user experience,
                performance, and maintainable code architecture. I enjoy
                collaborating with cross-functional teams to deliver products
                that users love.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
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
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    backgroundColor: "rgba(51, 155, 255, 0.1)",
                    color: "#339BFF",
                  }}
                >
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg text-white">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gray-700/50 text-gray-200 border border-gray-600 hover:border-blue-400/50 transition-colors duration-200"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(31, 41, 55, 0.9) 100%)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional ambient lighting */}
      <div
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-5 blur-3xl"
        style={{
          background: "radial-gradient(circle, #66B3FF 0%, transparent 70%)",
        }}
      ></div>
    </section>
  );
};

export default About;
