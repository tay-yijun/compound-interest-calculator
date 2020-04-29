<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">No. of Years: {{ years.toString().padStart(2, '0') }}</div>
      </md-card-header>
      <md-card-content>
        <vue-slider
          :value="years"
          :min="0"
          :max="50"
          :hide-label="true"
          :interval="1"
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
  name: "UserInputYears",
  components: {
    VueSlider
  },
  computed: {
    ...mapState(["years"])
  },
  methods: {
    ...mapMutations(["updateYears"]),
    changeEvent() {
      let sliderValue = this.$refs.slider.getValue();
      this.updateYears(sliderValue);
    }
  }
};
</script>

<style scoped>
</style>