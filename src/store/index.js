import { createStore } from "vuex";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default createStore({
  state() {
    return {
      selectedIconId: "",
    };
  },
  mutations: {
    selectIcon(state, id) {
      state.selectedIconId = id;
    },
  },
});
