var options = {
  chart: {
    height: 260,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%", // Adjusted for better spacing
      borderRadius: 10, // Smoother corners
      distributed: true,
      dataLabels: {
        position: "top", // Keep data labels on top
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return "$" + val; // Shortened label format
    },
    offsetY: -10,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },
  series: [
    {
      name: "Income",
      data: [2000, 3000, 4000, 5000, 6000, 7000],
    },
  ],
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    axisBorder: {
      show: true,
      color: "#ccc",
    },
    axisTicks: {
      show: true,
      color: "#ccc",
    },
    labels: {
      show: true,
      rotate: -45,
      style: {
        fontSize: "12px",
        colors: ["#6c757d"],
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val + "M"; // Add "M" to y-axis labels
      },
      style: {
        fontSize: "12px",
        colors: ["#6c757d"],
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    borderColor: "#e0e0e0",
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true, // Enable y-axis gridlines for better readability
      },
    },
  },
  tooltip: {
    theme: "dark", // Improved tooltip appearance
    y: {
      formatter: function (val) {
        return "$" + val; // Keep detailed tooltip format
      },
    },
  },
  colors: ["#6f42c1", "#e83e8c", "#28a745", "#fd7e14", "#007bff", "#6c757d", "#dc3545"], // Updated color palette
};
var chart = new ApexCharts(document.querySelector("#profileIncomeGraph"), options);
chart.render();
