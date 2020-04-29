import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    principalAmount: 10000,
    interestRate: 5,
    years: 25
  },
  mutations: {
    updatePricipalAmount(state, payload) {
      state.principalAmount = payload
    },
    updateInterestRate(state, payload) {
      state.interestRate = payload
    },
    updateYears(state, payload) {
      state.years = payload
    }
  },
  getters: {
    interestRatePercentage: state => {
      let interestRatePercentage = state.interestRate / 100; 
      return interestRatePercentage; 
    }, 
    finalAmount: (state, getters) => {
      let finalAmount = state.principalAmount * (1 + getters.interestRatePercentage) ** state.years
      return finalAmount; 
    }, 
    profitAmount: (state, getters) => {
      let profitAmount = getters.finalAmount - state.principalAmount; 
      return profitAmount; 
    }
  },
  actions: {
  },
  modules: {
  }
})
