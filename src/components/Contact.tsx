import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  X,
  CheckCircle,
  AlertCircle,
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

const Button = ({ size, className, children, disabled, ...props }) => {
  const sizeClasses = {
    lg: "h-11 px-8 text-lg",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#339BFF] disabled:pointer-events-none disabled:opacity-50 bg-[#339BFF] text-white hover:bg-[#2B85E6] shadow-lg shadow-[#339BFF]/25 hover:shadow-[#339BFF]/40 hover:scale-[1.02] ${sizeClasses[size]} ${className}`}
      disabled={disabled}
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

const Toast = ({ toast, onClose }) => {
  const icons = {
    success: <CheckCircle size={20} className="text-green-400" />,
    error: <AlertCircle size={20} className="text-red-400" />,
  };

  const bgColors = {
    success: "bg-green-900/80 border-green-700/50",
    error: "bg-red-900/80 border-red-700/50",
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg border backdrop-blur-sm shadow-lg animate-slide-in ${
        bgColors[toast.type]
      }`}
    >
      <div className="flex items-center gap-3">
        {icons[toast.type]}
        <div className="flex-1">
          <div className="font-medium text-white">{toast.title}</div>
          <div className="text-sm text-slate-300">{toast.message}</div>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [toast, setToast] = useState<any>(null);

  const showToast = (type, title, message) => {
    setToast({ type, title, message });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      showToast("error", "Validation Error", "Please fill in all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast(
        "error",
        "Invalid Email",
        "Please enter a valid email address."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://portfolio-bakc-production.up.railway.app/mail/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: formData.email,
            to: "mohamedaminebenromdhane01@gmail.com",
            subject: `New Contact Form Message from ${formData.name}`,
            text: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
          }),
        }
      );

      if (response.ok) {
        showToast(
          "success",
          "Message Sent!",
          "Thank you for your message. I'll get back to you soon!"
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      showToast(
        "error",
        "Send Failed",
        "There was an error sending your message. Please try again or contact me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
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
      {/* Toast Notification */}
      {toast && <Toast toast={toast} onClose={() => setToast(null)} />}

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

                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
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

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;
