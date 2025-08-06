/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}"
    ],
    prefix: "",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px"
        }
      },
      extend: {
        screens: {
          slg: "900px"
        },
        colors: {
          border: "var(--border)",
          // border: "#303633",
          input: "var(--input)",
          ring: "var(--ring)",
          background: "#090F0D",
          "container-high": "#1E1E1E",
          "container-highest": "#303633",
          "container-lowest": "#171D1A",
          "container-low": "#1C1C1C",
          "green-dark": "#88D6BB",
          // ----------------------------------
          // Neutrals
          white: "#FFFFFF",
          "light-grey1": "#AAAAAA",
          "light-grey2": "#A3A3A3",
          "dark-grey1": "#191919",
          "dark-grey2": "#262626",
          grey1: "#757575",
          grey2: "#676767",
          grey3: "#9E9E9E",
          grey4: "#D9D9D9",
          grey5: "#A8A8A8",
          grey6: "#7B7B7B",
          "light-grey3": "#F5F5F5",
          "light-grey4": "#FCFDFC",
          "light-grey5": "#B1B1B1",
          "dark-grey3": "#333333",
          "dark-grey4": "#404040",
          "dark-grey5": "#171717",
          "dark-grey6": "#1E1E1E",
          "dark-grey7": "#2A2A2A",
          "dark-grey8": "#2563EB", // Adjust as necessary
          "dark-grey9": "#303030",
          "dark-grey10": "#232323",
  
          // Primary Colors
          "primary-green": "#00F15E",
          "primary-blue": "#3B82F6",
          "primary-dark-blue": "#3B81F5",
          "primary-yellow": "#EAB308",
          "primary-dark-green": "#21C063",
  
          // Secondary Colors
          "secondary-green": "#22C55E",
          "secondary-blue": "#00A651",
          "secondary-blue-dark": "#1E4FBC",
          "secondary-purple": "#A855F7",
          "secondary-yellow": "#F2EB25",
  
          // Accent Colors
          "accent-red": "#EF4444",
          "accent-red-dark": "#DC2626",
          "accent-orange": "#F97316",
          "accent-orange-dark": "#EA580C",
          "accent-yellow": "#E1EF44",
          "accent-pink": "#CA8A04",
          "accent-purple": "#F5F5F5",
  
          // Background and Surface Colors
          "background-light": "#CBFFF3",
          "background-dark0": "#0F0F0F",
          "background-dark": "#22B658",
          "background-dark2": "#193925",
          "background-dark3": "#413614",
          "background-dark4": "#422020",
          "background-light2": "#FFFAFA",
          "background-light3": "#FCFDFC",
          "background-dark-red": "#491D1D",
  
          // Error/Success Colors
          "success-green": "#20BE54",
          "success-green-light": "#20BE55",
          "error-red": "#FF0000",
  
          foreground: "hsl(var(--foreground))",
          primary: {
            // DEFAULT: "hsl(var(--primary))",
            DEFAULT: "#88D6BB",
            foreground: "#1E1E1E"
            // foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "#303633",
            // DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))"
          },
          tertiary: {
            DEFAULT: "#a8cbe2",
            dark: "#a8cbe2"
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))"
          },
          muted: {
            // DEFAULT: "hsl(var(--muted))",
            DEFAULT: "#171D1A",
            // foreground: "hsl(var(--muted-foreground))"
            foreground: "#aaaaaa"
          },
          accent: {
            // DEFAULT: "hsl(var(--accent))",
            DEFAULT: "#171D1A",
            foreground: "hsl(var(--accent-foreground))"
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))"
          },
          card: {
            // DEFAULT: "hsl(var(--card))",
            DEFAULT: "#1E1E1E",
            // foreground: "hsl(var(--card-foreground))",
            foreground: "hsl(var(--card-foreground))"
          },
          custom: {
            black: {
              1: "#020817"
            }
          }
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)"
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" }
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" }
          }
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out"
        },
        fontFamily: {
          mulish: ["Mulish", "sans-serif"],
          roboto: ["Roboto", "sans-serif"],
          poppins: ["Poppins", "sans-serif"],
          bebas: ["Bebas Neue", "sans-serif"]
        },
        aspectRatio: {
          "tactic-board": "1.3636"
        }
      }
    },
    plugins: [
      require("tailwindcss-animate"),
      require("@tailwindcss/container-queries"),
      require("@tailwindcss/typography")
    ]
  };
  