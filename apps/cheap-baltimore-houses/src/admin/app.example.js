const config = {
  locales: ["en"],
  theme: {
    colors: {
      primary100: "#f6ecfc",
      primary200: "#e0c1f4",
      primary500: "#ac73e6",
      primary600: "#9736e8",
      primary700: "#8312d1",
      danger700: "#b72b1a",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
