<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Summary</div>
      </md-card-header>
      <md-table>
        <md-table-row>
          <md-table-cell>Final Amount</md-table-cell>
          <md-table-cell>${{ this.finalAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>Contributions</md-table-cell>
          <md-table-cell>${{ this.principalAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>Profit</md-table-cell>
          <md-table-cell>${{ this.profitAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}</md-table-cell>
        </md-table-row>
      </md-table>
    </md-card>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "TheSummaryCard",
  computed: {
    ...mapState(["principalAmount"]),
    ...mapGetters(["finalAmount", "profitAmount"])
  }
};
</script>

<style scoped>
</style>