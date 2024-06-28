export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkest: "#050505",
        darker: "#1F1F1F",
        dark: "#2D2D2D",
        darkGray: "#3A3A3A",
        gray: "#757575",
        lightGray: "#E9E9E9",
        light: "#F4F4F4",
        lighter: "#FFFFFF",
        purple: "#A445ED",
        red: "#FF5252",
      },
      fontFamily: {
        sans: ["sans-serif", "Inter"],
        serif: ["serif", "Lora"],
        mono: ["monospace", "Inconsolata"],
      },
      fontSize: {
        "heading-l": ["64px", "77px"],
        "heading-m": ["24px", "29px"],
        "heading-s": ["20px", "24px"],
        "body-m": ["18px", "24px"],
        "body-s": ["14px", "17px"],
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable dark mode class
};
