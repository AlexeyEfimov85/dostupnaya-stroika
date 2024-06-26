const containerBuilt = document.getElementById("builtCarousel");
const optionsBuilt = {
    Navigation: true,
    Dots: false,
    Thumbs: {
      type: "classic",
      Carousel: {
        Navigation: false,
        axis: "x",
        breakpoints: {
          "(min-width: 2500px)": {
            axis: "y",
          },
        },
      },
    },
};

new Carousel(
    containerBuilt,
    optionsBuilt,
    { Thumbs }
  );