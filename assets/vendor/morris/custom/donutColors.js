// Morris Donut
Morris.Donut({
  element: "donutColors",
  data: [
    { value: 30, label: "foo" },
    { value: 15, label: "bar" },
    { value: 10, label: "baz" },
    { value: 5, label: "A really really long label" },
  ],
  backgroundColor: "#17181c",
  labelColor: "#17181c",
  colors: ['#338dd7', '#4aa3e5', '#61b9f2', '#78ceff', '#8fe2ff', '#a6f8ff'],
  resize: true,
  hideHover: "auto",
  gridLineColor: "#dfd6ff",
  formatter: function (x) {
    return x + "%";
  },
});
