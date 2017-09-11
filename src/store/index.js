import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import constID from './modules/constID';

export default new Vuex.Store({
  modules: {
    constID
  }
});
