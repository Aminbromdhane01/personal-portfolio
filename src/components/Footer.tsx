import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 py-12 border-t border-slate-700/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-32 bg-[#339BFF]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-0 right-1/4 w-48 h-24 bg-[#339BFF]/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300 mb-6 md:mb-0 group">
            <span className="transition-colors duration-300 group-hover:text-white">
              Made with
            </span>
            <Heart
              size={16}
              className="text-[#339BFF] fill-current animate-pulse transition-all duration-300 group-hover:scale-110"
            />
            <span className="font-medium bg-gradient-to-r from-[#339BFF] to-[#66B3FF] bg-clip-text text-transparent">
              Mohamed Amine Ben Romdhane
            </span>
          </div>

          <div className="text-slate-400 text-sm hover:text-slate-300 transition-colors duration-300">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-8 pt-6 border-t border-slate-700/30">
          <div className="flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#339BFF]/50 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute bottom-4 left-10 w-12 h-12 bg-[#339BFF]/10 rounded-full blur-lg animate-pulse"></div>
      <div
        className="absolute bottom-6 right-10 w-8 h-8 bg-[#339BFF]/20 rounded-full blur-sm animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </footer>
  );
};

export default Footer;
