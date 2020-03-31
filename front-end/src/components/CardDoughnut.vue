<template>
  <div class="container">
    <h2 align="center">SPLIT BY CARD</h2>
    <div>
      <PieChart :styles="myStyles" :chartData="datacollection" :options="options" />
    </div>
  </div>
</template>

<script>
//import piechart to get the pie chart in the component.
//import axios for calling flask apis
import PieChart from "./PieChart.js";
import axios from "axios";

export default {
  components: {
    PieChart
  },
  data() {
    return {
      datacollection: null,
      loaded: false,
      options: {
        legend: {
          display: "false"
        }
      },
      data: []
    };
  },

  //Configure here for the functions to run when the web page loads.
  mounted() {
    this.getBankSplits();
    this.getCategorySplits();

    //Logic to run when the Submit button is pressed. Refer to TableDisplay.vue to see inititation of the emit.
    this.$root.$on("ExpenseAdded", () => {
      this.getBankSplits();
      this.getCategorySplits();
    });
  },
  methods: {
    fillData() {
      //This is the setup for the pie chart. Labels, followed by datasets.
      this.datacollection = {
        labels: [
          "Citi Credit Card",
          "Bofa Credit Card",
          "Bofa Checking Account",
          "DCU Checking",
          "Discover Savings",
          "Discover Credit Card",
          "Marriott Credit Card",
          "Chase Credit Card"
        ],
        datasets: [
          {
            backgroundColor: [
              "#41B883",
              "#E46651",
              "#00D8FF",
              "#E0D8FF",
              "#4068FF",
              "#E1D800",
              "#00FF00",
              "#00FFFF"
            ],
            borderColor: "lightpink",
            pointBackgroundColor: "blue",
            borderWidth: 1,
            data: this.data
          }
        ]
      };
    },
    getBankSplits() {
      axios
        .get("http://localhost:5000/getBankSplits")
        .then(response => {
          //Once we get back a status of 200, we enter here.

          //Parsing the response to retrieve card information.
          var results = response.data;
          var Citi = results.TotalCard[0].CitiCreditCard;
          var DCUChecking = results.TotalCard[0].DCUChecking;
          var BofaCr = results.TotalCard[0].BofaCreditCard;
          var BofaChk = results.TotalCard[0].BofaCheckingAccount;
          var MarriottCr = results.TotalCard[0].MarriottCreditCard;
          var ChaseCr = results.TotalCard[0].ChaseCreditCard;
          var DiscoverSavings = results.TotalCard[0].DiscoverSavings;
          var DiscoverCr = results.TotalCard[0].DiscoverCreditCard;

          //Configuring the response data to send to the graph
          this.data = [
            Citi,
            BofaCr,
            BofaChk,
            DCUChecking,
            DiscoverSavings,
            DiscoverCr,
            MarriottCr,
            ChaseCr
          ];
          this.fillData();
        })
        .catch(err => console.error(err));
    }
  },
  computed: {
    myStyles() {
      return {
        height: "40%",
        width: "99%",
        position: "relative"
      };
    }
  }
};
</script>

<style scoped></style>
