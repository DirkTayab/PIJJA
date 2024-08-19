var slider = tns({
  container: ".testimonials__slider",
  items: 1,
  speed: 500,
  slideBy: "1",
  loop: true,
  gutter: 0,
  controls: false,
  autoplay: true,
  autoplayButtonOutput: false,
  responsive: {
    1250: {
      items: 1,
    },
    200: {
      items: 1,
    },
  },
});
