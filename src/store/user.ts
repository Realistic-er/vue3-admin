import type { Commit } from 'vuex';

interface user {
  account: string,
  password: string,
}
interface account {
  account: string,
}

export default {
  state: (): user => ({
    account: 'admax',
    password: '12adx',
  }),
  getters: {
  },
  mutations: {
    changestore(state:user, payload:account): void {
      state.account = payload.account;
      window.localStorage.setItem('account', payload.account);
    },
  },
  actions: {
    check(context: { state: user, commit: Commit }, payload:account) {
      context.commit('changestore', payload);
    },
  },
};
