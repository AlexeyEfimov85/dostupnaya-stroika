const container = document.getElementById("myCarousel");
const options = {
    Navigation: false,
    Dots: false,
    Thumbs: {
      type: "classic",
      Carousel: {
        Navigation: false,
        axis: "x",
        breakpoints: {
          "(min-width: 700px)": {
            axis: "y",
          },
        },
      },
    },
};

new Carousel(
    container,
    options,
    { Thumbs }
  );