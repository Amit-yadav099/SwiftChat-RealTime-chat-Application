export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // ✅ enable daisyUI
  // Optional: pick specific themes or keep default set
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}