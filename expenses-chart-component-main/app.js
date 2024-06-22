const ctx = document.getElementById('myChart');

let jsondata;
let myChart;

//fetch data from json file
fetch('data.json')
  .then(function (response) {
    if (response.status == 200) {
      return response.json();
    }
  })
  .then(function (data) {
    jsondata = data;
    createChart(jsondata, 'bar');
  });

function setChartType(chartType) {
  myChart.destroy();
  createChart(jsondata, chartType);
}

// render chart
function createChart(data, type) {
  const datapoints = data.map((col) => col.amount);
  const max = Math.max(...datapoints);
  const barColors = datapoints.map((el) =>
    el == max ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'
  );

  const hoverBarColors = datapoints.map((el) =>
    el == max ? 'hsl(186, 46%, 77%)' : 'hsl(359.2,92.7%,83.9%)'
  );

  myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: data.map((row) => row.day),
      datasets: [
        {
          label: '',
          data: datapoints,
          borderWidth: 1,
          backgroundColor: barColors,
          hoverBackgroundColor: hoverBarColors,
          borderRadius: 5,
          borderSkipped: false,
        },
      ],
    },
    options: {
      onHover: pointerOption,
      layout: {
        padding: {
          bottom: 25,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
          beginAtZero: true,
          display: false,
        },
        maintainAspectRatio: false,
      },
      plugins: {
        legend: {
          align: 'start',
          labels: {
            boxWidth: 0,
          },
        },
        tooltip: {
          yAlign: 'bottom',
          caretSize: 0,
          displayColors: false,
          bodySpacing: 10,
          callbacks: {
            title: titleTooltip,
            label: labelTooltip,
          },
        },
      },
    },
  });
}

//remove tooltip title
const titleTooltip = (title) => (title = '');

//insert $ to the label
const labelTooltip = function (context) {
  let label = '';
  if (context.parsed.y !== null) {
    label += new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(context.parsed.y);
  }
  return label;
};

//poniter on hover
const pointerOption = (event, chartElement) => {
  event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
};
