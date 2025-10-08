
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        logo: "clamp(75px, 6vw+1rem, 85px)", // ✅ this is a string, so it's valid
      },
    },
  },
  plugins: [],
};