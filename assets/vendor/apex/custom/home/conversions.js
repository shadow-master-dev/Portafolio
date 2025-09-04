var options = {
  chart: {
    width: 300,
    type: "pie",
  },
  labels: ["Google", "Twitter", "Instagram", "Google", "Youtube"],
  series: [20, 34, 56, 25, 53],
  legend: {
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  colors: ["#338dd7", "#3a97e0", "#42a1e9", "#4aabf2", "#52b5fb"],
};
var chart = new ApexCharts(document.querySelector("#conversions"), options);
chart.render();