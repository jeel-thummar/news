/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      
      screens: {
        xxs: "380px",
        xs: "576px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1400px",
        xxl: "1600px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xs: "540px",
          sm: "720px",
          md: "960px",
          lg: "1340px",
          xl: "1200px",
        },
      },
      fontFamily: {
        NunitoSans : ["Nunito Sans"]
      },
      colors : {
        header: "#242526",
        yellow: "#f89c1d",
        sidebar:"#111112",
        sideBorder : "#4d5054",
        cpage : "#2c2d2f",
        textcolor : "#ebebeb99",
        ntextcolor : "#e4e6eb"
      }
    },
  },
  plugins: [],
};
