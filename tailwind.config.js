module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: {
        standard: ["outline-none"],
      },
    },
  },
  theme: {
    fontFamily: {
      sans: ["Moderat"],
    },
    extend: {
      screens: {
        xs: "425px",
        smdtp: "960px",
        dtp: "1024px", // Desktop 1024px min-width alias
        lg: "1280px",
        xl: "1280px",
        "2xl": "1560px",
        landscape: { raw: "(orientation: landscape)" },
        portrait: { raw: "(orientation: portrait)" },
      },
      maxWidth: {
        "8xl": "1920px",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      colors: {
        primary: "var(--primary)",
        "primary-2": "var(--primary-2)",
        secondary: "var(--secondary)",
        "secondary-2": "var(--secondary-2)",
        hover: "var(--hover)",
        "hover-1": "var(--hover-1)",
        "hover-2": "var(--hover-2)",
        "accent-0": "var(--accent-0)",
        "accent-1": "var(--accent-1)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
        "accent-4": "var(--accent-4)",
        "accent-5": "var(--accent-5)",
        "accent-6": "var(--accent-6)",
        "accent-7": "var(--accent-7)",
        "accent-8": "var(--accent-8)",
        "accent-9": "var(--accent-9)",
        violet: "var(--violet)",
        "violet-light": "var(--violet-light)",
        "violet-dark": "var(--violet-dark)",
        pink: "var(--pink)",
        "pink-light": "var(--pink-light)",
        cyan: "var(--cyan)",
        blue: "var(--blue)",
        green: "var(--green)",
        red: "var(--red)",
      },
      textColor: {
        base: "var(--text-base)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        gray: {
          disable: "#c0c0c0",
        },
      },
      boxShadow: {
        "outline-normal": "0 0 0 2px var(--accent-2)",
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
      },
      lineHeight: {
        "extra-loose": "2.2",
      },
      scale: {
        120: "1.2",
      },
      spacing: {
        20: "20px",
        25: "25px",
        30: "30px",
        35: "35px",
        45: "45px",
        50: "50px",
        60: "60px",
        fit: "fit-content",
      },
      borderWidth: {
        "3/2": "1.5px",
      },
    },
  },
  plugins: [],
};
