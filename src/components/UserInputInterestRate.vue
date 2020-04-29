<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Interest Rate: {{ interestRate.toFixed(1) }}%</div>
      </md-card-header>
      <md-card-content>
        <vue-slider
          :value="interestRate"
          :min="0"
          :max="10"
          :hide-label="true"
          :interval="0.5"
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
  name: "UserInputYearsCard",
  props: {},
  components: {
    VueSlider
  },
  computed: mapState(["interestRate"]),
  methods: {
    ...mapMutations(["updateInterestRate"]),
    changeEvent() {
      let sliderValue = this.$refs.slider.getValue();
      this.updateInterestRate(sliderValue);
    }
  }
};
</script>

<style scoped>
</style>