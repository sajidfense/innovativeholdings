import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#050d1a",
          light: "#0d1f3c",
          mid: "#1a3358",
          muted: "#2d4a6e",
        },
        accent: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
          glow: "rgba(37,99,235,0.3)",
        },
        electric: {
          DEFAULT: "#3b82f6",
          bright: "#60a5fa",
          dim: "rgba(59,130,246,0.15)",
        },
        silver: {
          DEFAULT: "#94a3b8",
          light: "#cbd5e1",
          muted: "#64748b",
        },
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-source-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // Editorial-scale display typography
        "display-3xl": ["5.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-2xl": ["4.5rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "body-xl": ["1.25rem", { lineHeight: "1.7" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.75" }],
        "label-lg": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.1em" }],
        "label-sm": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.12em" }],
      },
      spacing: {
        "section": "7rem",
        "section-lg": "10rem",
        "section-sm": "5rem",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-down": "fadeDown 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "slide-in-left": "slideInLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marqueeReverse 40s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "count-up": "countUp 1s cubic-bezier(0.22,1,0.36,1) forwards",
        "line-grow": "lineGrow 1.2s cubic-bezier(0.22,1,0.36,1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37,99,235,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(37,99,235,0.6)" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(37,99,235,0.2)",
        "glow-md": "0 0 30px rgba(37,99,235,0.25)",
        "glow-lg": "0 0 60px rgba(37,99,235,0.3)",
        "elevation-1": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
        "elevation-2": "0 4px 16px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
        "elevation-3": "0 10px 40px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.1)",
        "elevation-4": "0 20px 64px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.12)",
        "card-hover": "0 24px 80px rgba(0,0,0,0.18), 0 8px 32px rgba(37,99,235,0.08)",
        "nav": "0 1px 0 rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.3)",
      },
      backdropBlur: {
        "xs": "2px",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.22,1,0.36,1)",
        "smooth": "cubic-bezier(0.4,0,0.2,1)",
        "in-expo": "cubic-bezier(0.95,0.05,0.795,0.035)",
        "out-expo": "cubic-bezier(0.19,1,0.22,1)",
      },
    },
  },
  plugins: [],
};

export default config;
