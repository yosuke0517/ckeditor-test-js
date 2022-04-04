import { createStore, useStore as baseUseStore } from "vuex";
import * as MutationTypes from "./mutationTypes";

// stateの型定義
// type State = { components: unknown[] };

// storeをprovide/injectするためのキー
export const key = Symbol();

// store本体
export const store = createStore({
  state: {
    components: [],
  },
  mutations: {
    [MutationTypes.ADD_COMPONENT](state, component) {
      state.components.push(component);
    },
  },
});

// useStoreを使う時にキーの指定を省略するためのラッパー関数
export const useStore = () => {
  return baseUseStore(key);
};
