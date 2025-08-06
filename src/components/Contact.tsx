import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const Card = ({ className, children }) => (
  <div
    className={`rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const Button = ({ size, className, children, ...props }) => {
  const sizeClasses = {
    lg: "h-11 px-8 text-lg",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#339BFF] disabled:pointer-events-none disabled:opacity-50 bg-[#339BFF] text-white hover:bg-[#2B85E6] shadow-lg shadow-[#339BFF]/25 hover:shadow-[#339BFF]/40 hover:scale-[1.02] ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ className, ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-slate-600 bg-slate-800/50 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#339BFF] focus:border-[#339BFF] transition-all duration-300 backdrop-blur-sm ${className}`}
    {...props}
  />
);

const Textarea = ({ className, ...props }) => (
  <textarea
    className={`flex w-full rounded-md border border-slate-600 bg-slate-800/50 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#339BFF] focus:border-[#339BFF] transition-all duration-300 backdrop-blur-sm ${className}`}
    {...props}
  />
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com",
      color: "hover:bg-gray-700 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com",
      color: "hover:bg-[#0077B5] hover:text-white",
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      url: "https://twitter.com",
      color: "hover:bg-[#1DA1F2] hover:text-white",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#339BFF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#339BFF]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#339BFF] to-[#66B3FF] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and
            exciting projects. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-white">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-[#339BFF]/20 rounded-lg text-[#339BFF] border border-[#339BFF]/30 group-hover:bg-[#339BFF]/30 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a
                    href="mailto:mohamedaminebenromdhane01@gmail.com"
                    className="text-slate-300 hover:text-[#339BFF] transition-colors duration-300"
                  >
                    mohamedaminebenromdhane01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-[#339BFF]/20 rounded-lg text-[#339BFF] border border-[#339BFF]/30 group-hover:bg-[#339BFF]/30 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <a
                    href="tel:+21629236073"
                    className="text-slate-300 hover:text-[#339BFF] transition-colors duration-300"
                  >
                    +216 29236073
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-[#339BFF]/20 rounded-lg text-[#339BFF] border border-[#339BFF]/30 group-hover:bg-[#339BFF]/30 transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <span className="text-slate-300">Mahdia, Tunisia</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg transition-all duration-300 hover:scale-110 text-slate-300 backdrop-blur-sm ${social.color} hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up hover:border-[#339BFF]/30 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send Message
              </h3>
              <div className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button onClick={handleSubmit} size="lg" className="w-full">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating accent elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#339BFF]/20 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-[#339BFF]/15 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up:nth-child(1) {
          animation-delay: 0.2s;
        }

        .animate-slide-up:nth-child(2) {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default Contact;
