<template>
  <div class="md-layout md-gutter md-alignment-center">
    <md-card class="md-layout-item md-size-50 md-medium-size-65 md-small-size-80 md-xsmall-size-90">
      <md-card-header>
        <div class="md-title">
          Principal Amount:
          <br />
          ${{ principalAmount.toLocaleString() }}
        </div>
      </md-card-header>
      <md-card-content>
        <vue-slider
          :value="principalAmount"
          :data="sliderData"
          :hide-label="true"
          :interval="1000"
          tooltip="none"
          ref="slider"
          @change="changeEvent()"
        ></vue-slider>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/material.css";
export default {
  name: "UserInputInitialContrinution",
  props: {},
  components: {
    VueSlider
  },
  data: () => ({
    sliderData: [
      0,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000,
      2000,
      3000,
      4000,
      5000,
      6000,
      7000,
      8000,
      9000,
      10000,
      20000,
      30000,
      40000,
      50000,
      60000,
      70000,
      80000,
      90000,
      100000,
      200000,
      300000,
      400000,
      500000,
      600000,
      700000,
      800000,
      900000,
      1000000
    ]
  }),
  computed: mapState(["principalAmount"]),
  methods: {
    ...mapMutations(["updatePricipalAmount"]),
    changeEvent() {
      let sliderValue = this.$refs.slider.getValue();
      this.updatePricipalAmount(sliderValue);
    }
  }
};
</script>

<style scoped>
</style>