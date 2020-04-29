<template>
  <div id="app">
    <!-- Header -->
    <p>
      <span class="md-display-1">
        Compound Interest Calculator
        <md-icon class="md-size-2x">trending_up</md-icon>
      </span>
    </p>

    <!-- User Input Cards -->
    <UserInputPrincipalAmount />
    <UserInputYears />
    <UserInputInterestRate />

    <!-- Summary Card -->
    <TheSummaryCard />
  </div>
</template>

<script>
import UserInputYears from "./components/UserInputYears";
import UserInputInterestRate from "./components/UserInputInterestRate";
import UserInputPrincipalAmount from "./components/UserInputPrincipalAmount";
import TheSummaryCard from "./components/TheSummaryCard";

export default {
  name: "App",
  components: {
    UserInputYears,
    UserInputInterestRate,
    UserInputPrincipalAmount,
    TheSummaryCard
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");
#app {
  text-align: center;
  padding: 25px;
}
</style>
