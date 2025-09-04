var options = {
  series: [
    {
      name: "Tickets",
      data: [1100, 880, 740, 550, 330, 200],
    },
  ],
  chart: {
    type: "bar",
    height: 300,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      barHeight: "80%",
      isFunnel: true,
    },
  },
  colors: ['#338dd7', '#4aa3e5', '#61b9f2', '#78ceff', '#8fe2ff', '#a6f8ff'],
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex];
    },
    dropShadow: {
      enabled: true,
    },
  },
  xaxis: {
    categories: ["Closed", "Hold", "Resolved", "In Progress", "Open", "Total"],
  },
  legend: {
    show: true,
  },
};

var chart = new ApexCharts(document.querySelector("#funnel"), options);
chart.render();
