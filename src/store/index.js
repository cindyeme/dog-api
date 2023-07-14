import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import { createStore } from 'vuex'

export const store = createStore({
  state,
  getters,
  mutations,
  actions
})
