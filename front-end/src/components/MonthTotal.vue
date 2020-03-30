<template>
  <div class="container">
    <h2 align="center">THIS MONTH VS PREVIOUS MONTH</h2>
    <div>
      <BarChart :styles="myStyles" :chart-data="datacollection" />
    </div>
  </div>
</template>

<script>
import BarChart from "./BarChart.js";
import axios from "axios";

export default {
  components: {
    BarChart
  },
  data() {
    return {
      datacollection: null,
      loaded: false,
      data: []
    };
  },
  mounted() {
    this.getBankSplits();

    this.$root.$on("ExpenseAdded", () => {
      this.getBankSplits();
    });
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["Expenses", "Target"],
        datasets: [
          {
            label: "Actual",
            backgroundColor: ["#41B883", "#E46651"],
            borderWidth: 1,
            data: this.data
          },

          {
            label: "Target",
            backgroundColor: ["#E46651", "#E46651"],
            borderWidth: 1,
            data: [3600]
          }
        ]
      };
    },
    getBankSplits() {
      axios
        .get("http://localhost:5000/getBankSplits")
        .then(response => {
          var results = response.data;
          this.data = [results.Total[0].MonthlyTotal, 3600];
          this.fillData();
        })
        .catch(err => console.error(err));
    }
  },
  computed: {
    myStyles() {
      return {
        height: "40%",
        width: "85%",
        position: "relative"
      };
    }
  }
};
</script>

<style scoped></style>
