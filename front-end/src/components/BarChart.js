import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    }
  },
  type: "horizontalBar",
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        display: true,
        position: "bottom",
        fontColor: "black"
      },
      title: {
        display: false,
        text: "TARGET VS ACTUAL EXPENSES"
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              offsetGridLines: true
            },
            beginAtZero: true
          }
        ]
      }
    }
  }),
  mounted() {
    this.renderChart(this.ChartData, this.options);
  }
};
