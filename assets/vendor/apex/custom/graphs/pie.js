var options = {
  chart: {
    width: 300,
    type: "pie",
  },
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  series: [20, 20, 20, 20, 20],
  legend: {
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  colors: ['#338dd7', '#4aa3e5', '#61b9f2', '#78ceff', '#8fe2ff', '#a6f8ff'],
};
var chart = new ApexCharts(document.querySelector("#pie"), options);
chart.render();
