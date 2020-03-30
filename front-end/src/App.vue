<template id="template">
  <div id="app" class="main">
    <h1 align="center">MONTHLY EXPENSES</h1>
    <div class="row">
      <!--Left side-->
      <div class="col-sm-6 tableDisplay">
        <TableDisplay />
      </div>
      <!--right side-->
      <div class="col-sm-6">
        <div class="row">
          <GraphSample class="graph col-md-5" />
          <CategoryGraph class="graph col-md-5" />
        </div>
        <div class="row">
          <PrevMonthTotal class="graph2 col-sm-5" />
          <MonthTotal class="graph2 col-md-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableDisplay from "./components/TableDisplay.vue";
import GraphSample from "./components/GraphSample.vue";
import CategoryGraph from "./components/CategoryGraph.vue";
import MonthTotal from "./components/MonthTotal.vue";
import PrevMonthTotal from "./components/PrevMonthTotal.vue";
export default {
  name: "App",
  components: {
    TableDisplay,
    CategoryGraph,
    GraphSample,
    MonthTotal,
    PrevMonthTotal
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
}

.tableDisplay {
  position: relative;
  left: 10px;
  background-color: #ffffff;
}

.graph {
  z-index: 1;
  border: 1px solid black;
  position: relative;
  background-color: #ffffff;
  padding-top: 10px;
  margin-top: 40px;
  margin-left: 10px;
}

.graph2 {
  z-index: 1;
  border: 1px solid black;
  position: relative;
  background-color: #ffffff;
  padding-top: 10px;
  margin-top: 60px;
  margin-left: 10px;
}

.left {
  left: 0;
}

h1 {
  background-color: #f43605;
}

.right {
  right: 0;
}
</style>
